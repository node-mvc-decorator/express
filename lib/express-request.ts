
import * as express from 'express';
import {HttpRequest} from "@node-mvc-decorator/core/lib/beans/http-request";

export class ExpressRequest extends HttpRequest<express.Request> {
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
