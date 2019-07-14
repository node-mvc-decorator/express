

import {Constructor} from "@node-mvc-decorator/core/lib/beans/constructor";

import {ExpressResponse} from "./express-response";
import {ExpressRequest} from "./express-request";
import * as express from 'express';
import {resolveRouter} from "@node-mvc-decorator/core/lib/core";


export function bootstrap(...constructors: Array<Constructor>): express.Express {
    const app = express()
        .use(express.json())
        .use(express.urlencoded({ extended: true }));

    resolveRouter(constructors, (path, method, hanlder) =>
        app[method](path, (req, res) => hanlder(new ExpressRequest(req), new ExpressResponse(res))));
    return app;
}
