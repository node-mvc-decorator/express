"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_request_1 = require("@node-mvc-decorator/core/lib/beans/http-request");
class ExpressRequest extends http_request_1.HttpRequest {
    get body() {
        return this.request.body;
    }
    get params() {
        return this.request.params;
    }
    get query() {
        return this.request.query;
    }
}
exports.ExpressRequest = ExpressRequest;
