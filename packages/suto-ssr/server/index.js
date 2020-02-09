const express = require('express')
const next = require('next')

const {
  wrapAppHttpWithLogger,
  withTryCatch,
  mainLogger,
  debugMethods,
  SentryInstance,
  safeStringify,
} = require('../node-logger-dist')

const serverLogger = mainLogger.child({
  logger: 'server/index',
})
const DEFAULT_PORT = 3000
const PORT = process.env.PORT || DEFAULT_PORT
const dev = process.env.NODE_ENV !== 'production'
serverLogger.info(`process.env.PORT=${process.env.PORT}`)
serverLogger.info(`process.env.HOST=${process.env.HOST}`);

(async () => {
  try {
    const app = next({ dev })
    const handle = app.getRequestHandler()
    app.prepare = withTryCatch({
      fn: app.prepare,
      caller: 'NextApp',
    })
    await app.prepare()
    const serverApp = express()
    serverApp.use(SentryInstance.Handlers.requestHandler())
    wrapAppHttpWithLogger(serverApp)
    debugMethods({
      object: serverApp,
      methods: ['listen'],
      caller: 'serverApp',
    })
    serverApp.use(express.json())

    // TODO: add proper localization
    serverApp.get('/ru', async (req, res) => app.render(
      req,
      res,
      '/',
      req.query,
    ))
    const numbersOfLangPrefix = 3
    serverApp.get('/ru*', async (req, res) => app.render(
      req,
      res,
      req.url.slice(numbersOfLangPrefix),
      req.query,
    ))

    serverApp.get('*', (req, res) => handle(req, res))
    serverApp.use(SentryInstance.Handlers.errorHandler())
    await new Promise((resolve, reject) => {
      serverApp.listen(PORT, (err) => (err
        ? reject(err)
        : resolve()
      ))
    })
  } catch (e) {
    serverLogger.warn(`root error - ${safeStringify(e)}`)
    SentryInstance.captureException(e)
  }
})()
