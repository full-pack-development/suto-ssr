#!/bin/bash

set -x

declare -A signals=( ["SIGHUP"]=1 ["SIGINT"]=2 ["SIGTERM"]=15 )

pid=0

# Trap the signal and send it as an argument to the handler
trap_wrapper() {
  local function=$1
  shift
  for signal; do
    trap "$function $signal" $signal
  done
}

# Send the signal to the process and wait for it to finish before exiting
signal_handler() {
  local signal=$1
  kill -0 $pid 2>/dev/null && kill -s $signal $pid
  # Reset to a default signal handler.
  trap - $signal
  wait $pid
  # Actually exit with the correct exit code
  exit $(( 128 + ${signals[$signal]} ))
}

# Trap signals
trap_wrapper signal_handler ${!signals[@]}

# Run application
node -v
cd packages/"${SERVICE_NAME}" || return
node server/index.js &

# === smth???
pid=$!
wait

ping google.com
