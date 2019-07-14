"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_response_1 = require("@node-mvc-decorator/core/lib/beans/http-response");
class ExpressResponse extends http_response_1.HttpResponse {
    send(body) {
        this.response.send(body);
        return this;
    }
    status(code) {
        this.response.status(code);
        return this;
    }
}
exports.ExpressResponse = ExpressResponse;
