import * as winston from 'winston'
import * as Sentry from '@sentry/node'

const { createLogger, format, transports } = winston
const LOG_LEVEL = process.env.LOG_LEVEL || 'info'
console.log('process.env.LOG_LEVEL', LOG_LEVEL)

interface ExpressRequest {
  url: string
}

interface ExpressResponse {
  url: string
}
interface ExpressError {}

interface ExpressApp {
  use: (
    middleware: (
      err: ExpressError | 'undefined',
      req: ExpressRequest,
      res: ExpressResponse,
      next: (err?: ExpressError) => {},
    ) => void,
  ) => void
}

const consoleTransport = new transports.Console({
  level: LOG_LEVEL,
  handleExceptions: true,
})

const fileTransport = new transports.File({
  level: LOG_LEVEL,
  handleExceptions: true,
  maxsize: 5242880, // 5MB
  maxFiles: 1,
  filename: 'logs.txt',
})

// const levels = {
//   error: 0,
//   warn: 1,
//   info: 2,
//   verbose: 3,
//   debug: 4,
//   silly: 5
// };
Sentry.init({
  dsn: 'https://48d11e3a46914b17ab8a89c6dd44785b@sentry.io/2377050',
  environment: process.env.ENV_LABEL,
  debug: true,
})
const mainLogger = createLogger({
  transports: [
    consoleTransport,
    ...(process.env.ENV_LABEL !== 'localhost' && [fileTransport]),
  ],
  level: LOG_LEVEL,
  defaultMeta: {
    serviceName: 'b2b-service',
    logger: '',
  },
  format: format.combine(
    format.timestamp(),
    format.printf(props => {
      const { level, message, timestamp, serviceName, logger } = props
      return `[${timestamp}] ${level} ${serviceName} ${process.env.ENV_LABEL}: ${logger} ${message}`
    }),
  ),
})
const requestLogger = mainLogger.child({
  logger: 'request',
})
const expressErrorLogger = mainLogger.child({
  logger: 'expressError',
})

function logRequest(
  req: ExpressRequest,
  res: ExpressResponse,
  next: (err?: ExpressError) => {},
) {
  requestLogger.info(req.url)
  next()
}

function logError(
  err: ExpressError | 'undefined',
  req: ExpressRequest,
  res: ExpressResponse,
  next: (err?: ExpressError) => {},
) {
  expressErrorLogger.error(JSON.stringify(err) || '')
  next(err)
}

const wrapAppHttpWithLogger = (app: ExpressApp) => {
  // @ts-ignore
  app.use(logRequest)
  app.use(logError)
}

function safeStringify(json: any) {
  let argsStr = ''
  try {
    argsStr = JSON.stringify(json, null, 4)
  } catch (err) {
    argsStr = 'cant stringify'
  }
  return argsStr
}

const withTryCatch = ({
  fn,
  caller,
  fallback,
}: {
  fn: (smth: any) => {}
  caller: string
  fallback?: any
}) => {
  return async function decoratedFn(...args: any[]) {
    const stringArgs = safeStringify(args)
    try {
      mainLogger.info(`${caller}.${fn.name}() called with args: ${stringArgs}`)
      // @ts-ignore
      const result = await fn.apply(this, args)
      mainLogger.info(
        `${caller}.${fn.name}() finished with res: ${safeStringify(result)}`,
      )
      return result
    } catch (error) {
      mainLogger.error(
        `${caller}.${fn.name}() failed, using fallback ${safeStringify(
          fallback,
        )}
        error - ${safeStringify(error)}
        `,
      )
      debugger
      Sentry.captureException(error)
      return fallback
    }
  }
}

const debugMethods = ({
  object,
  methods,
  caller,
}: {
  object: any
  methods: string[]
  caller: any
}) => {
  methods.forEach(method => {
    // eslint-disable-next-line no-param-reassign
    object[method] = withTryCatch({
      fn: object[method],
      caller,
    })
  })
  return object
}
export const SentryInstance = Sentry
export {
  withTryCatch,
  mainLogger,
  wrapAppHttpWithLogger,
  debugMethods,
  safeStringify,
}
