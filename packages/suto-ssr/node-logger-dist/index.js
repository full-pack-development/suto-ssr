
const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(((resolve) => { resolve(value) })) }
  return new (P || (P = Promise))(((resolve, reject) => {
    function fulfilled(value) { try { step(generator.next(value)) } catch (e) { reject(e) } }
    function rejected(value) { try { step(generator.throw(value)) } catch (e) { reject(e) } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected) }
    step((generator = generator.apply(thisArg, _arguments || [])).next())
  }))
}
const __generator = (this && this.__generator) || function (thisArg, body) {
  let _ = {
    label: 0, sent() { if (t[0] & 1) throw t[1]; return t[1] }, trys: [], ops: [],
  }; let f; let y; let t; let
    g
  return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol === 'function' && (g[Symbol.iterator] = function () { return this }), g
  function verb(n) { return function (v) { return step([n, v]) } }
  function step(op) {
    if (f) throw new TypeError('Generator is already executing.')
    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t
        if (y = 0, t) op = [op[0] & 2, t.value]
        switch (op[0]) {
          case 0: case 1: t = op; break
          case 4: _.label++; return { value: op[1], done: false }
          case 5: _.label++; y = op[1]; op = [0]; continue
          case 7: op = _.ops.pop(); _.trys.pop(); continue
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue }
            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break }
            if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break }
            if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break }
            if (t[2]) _.ops.pop()
            _.trys.pop(); continue
        }
        op = body.call(thisArg, _)
      } catch (e) { op = [6, e]; y = 0 } finally { f = t = 0 }
    }
    if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true }
  }
}
const __read = (this && this.__read) || function (o, n) {
  let m = typeof Symbol === 'function' && o[Symbol.iterator]
  if (!m) return o
  const i = m.call(o); let r; const ar = []; let
    e
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value)
  } catch (error) { e = { error } } finally {
    try {
      if (r && !r.done && (m = i.return)) m.call(i)
    } finally { if (e) throw e.error }
  }
  return ar
}
const __spread = (this && this.__spread) || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]))
  return ar
}
const __importStar = (this && this.__importStar) || function (mod) {
  if (mod && mod.__esModule) return mod
  const result = {}
  if (mod != null) for (const k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k]
  result.default = mod
  return result
}
Object.defineProperty(exports, '__esModule', { value: true })
const winston = __importStar(require('winston'))
const Sentry = __importStar(require('@sentry/node'))

const createLogger = winston.createLogger; const format = winston.format; const
  transports = winston.transports
const LOG_LEVEL = process.env.LOG_LEVEL || 'info'
console.log('process.env.LOG_LEVEL', LOG_LEVEL)
const consoleTransport = new transports.Console({
  level: LOG_LEVEL,
  handleExceptions: true,
})
const fileTransport = new transports.File({
  level: LOG_LEVEL,
  handleExceptions: true,
  maxsize: 5242880,
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
  transports: __spread([
    consoleTransport,
  ], (process.env.ENV_LABEL !== 'localhost' && [fileTransport])).filter(Boolean),
  level: LOG_LEVEL,
  defaultMeta: {
    serviceName: 'b2b-service',
    logger: '',
  },
  format: format.combine(format.timestamp(), format.printf((props) => {
    const level = props.level; const message = props.message; const timestamp = props.timestamp; const serviceName = props.serviceName; const
      logger = props.logger
    return `[${timestamp}] ${level} ${serviceName} ${process.env.ENV_LABEL}: ${logger} ${message}`
  })),
})
exports.mainLogger = mainLogger
const requestLogger = mainLogger.child({
  logger: 'request',
})
const expressErrorLogger = mainLogger.child({
  logger: 'expressError',
})
function logRequest(req, res, next) {
  requestLogger.info(req.url)
  next()
}
function logError(err, req, res, next) {
  expressErrorLogger.error(JSON.stringify(err) || '')
  next(err)
}
const wrapAppHttpWithLogger = function (app) {
  // @ts-ignore
  app.use(logRequest)
  app.use(logError)
}
exports.wrapAppHttpWithLogger = wrapAppHttpWithLogger
function safeStringify(json) {
  let argsStr = ''
  try {
    argsStr = JSON.stringify(json, null, 4)
  } catch (err) {
    argsStr = 'cant stringify'
  }
  return argsStr
}
exports.safeStringify = safeStringify
const withTryCatch = function (_a) {
  const fn = _a.fn; const caller = _a.caller; const
    fallback = _a.fallback
  return function decoratedFn() {
    const args = []
    for (let _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i]
    }
    return __awaiter(this, void 0, void 0, function () {
      let stringArgs; let result; let
        error_1
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            stringArgs = safeStringify(args)
            _a.label = 1
          case 1:
            _a.trys.push([1, 3, , 4])
            mainLogger.info(`${caller}.${fn.name}() called with args: ${stringArgs}`)
            return [4 /* yield */, fn.apply(this, args)]
          case 2:
            result = _a.sent()
            mainLogger.info(`${caller}.${fn.name}() finished with res: ${safeStringify(result)}`)
            return [2 /* return */, result]
          case 3:
            error_1 = _a.sent()
            mainLogger.error(`${caller}.${fn.name}() failed, using fallback ${safeStringify(fallback)}\n        error - ${safeStringify(error_1)}\n        `)
            if (process.env.ENV_LABEL !== 'localhost') {
              Sentry.captureException(error_1)
            } else {
              debugger // eslint-disable-line no-debugger
            }
            return [2 /* return */, fallback]
          case 4: return [2]
        }
      })
    })
  }
}
exports.withTryCatch = withTryCatch
const debugMethods = function (_a) {
  const object = _a.object; const methods = _a.methods; const
    caller = _a.caller
  methods.forEach((method) => {
    // eslint-disable-next-line no-param-reassign
    object[method] = withTryCatch({
      fn: object[method],
      caller,
    })
  })
  return object
}
exports.debugMethods = debugMethods
exports.SentryInstance = Sentry
// # sourceMappingURL=index.js.map
