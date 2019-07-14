"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_response_1 = require("./express-response");
const express_request_1 = require("./express-request");
const express = require("express");
const core_1 = require("@node-mvc-decorator/core/lib/core");
function bootstrap(...constructors) {
    const app = express()
        .use(express.json())
        .use(express.urlencoded({ extended: true }));
    core_1.resolveRouter(constructors, (path, method, hanlder) => app[method](path, (req, res) => hanlder(new express_request_1.ExpressRequest(req), new express_response_1.ExpressResponse(res))));
    return app;
}
exports.bootstrap = bootstrap;
