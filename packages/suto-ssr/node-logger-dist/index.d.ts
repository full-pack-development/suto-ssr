import * as winston from 'winston';
import * as Sentry from '@sentry/node';
interface ExpressRequest {
    url: string;
}
interface ExpressResponse {
    url: string;
}
interface ExpressError {
}
interface ExpressApp {
    use: (middleware: (err: ExpressError | 'undefined', req: ExpressRequest, res: ExpressResponse, next: (err?: ExpressError) => {}) => void) => void;
}
declare const mainLogger: winston.Logger;
declare const wrapAppHttpWithLogger: (app: ExpressApp) => void;
declare function safeStringify(json: any): string;
declare const withTryCatch: ({ fn, caller, fallback, }: {
    fn: (smth: any) => {};
    caller: string;
    fallback?: any;
}) => (...args: any[]) => Promise<any>;
declare const debugMethods: ({ object, methods, caller, }: {
    object: any;
    methods: string[];
    caller: any;
}) => any;
export declare const SentryInstance: typeof Sentry;
export { withTryCatch, mainLogger, wrapAppHttpWithLogger, debugMethods, safeStringify, };
//# sourceMappingURL=index.d.ts.map