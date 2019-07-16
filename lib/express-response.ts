import * as express from 'express';
import {CoreResponse} from "@node-mvc-decorator/core";

class ExpressResponse extends CoreResponse<express.Response> {
    send(body: any): this {
        this.response.send(body);
        return this;
    }

    status(code: number): this {
        this.response.status(code);
        return this;
    }

    type(type: string): this {
        this.response.type(type);
        return this;
    }

}

export {ExpressResponse};
