
import * as express from 'express';
import {IncomingHttpHeaders} from "http";
import {CoreRequest} from "@node-mvc-decorator/core";

class ExpressRequest extends CoreRequest<express.Request> {
    get headers(): IncomingHttpHeaders {
        return this.request.headers;
    }
    get body(): any {
        return this.request.body;
    }

    get params(): any {
        return this.request.params;
    }

    get query(): any {
        return this.request.query;
    }

}

export {ExpressRequest};
