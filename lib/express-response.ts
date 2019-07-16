import * as express from 'express';
import {CoreResponse} from "@node-mvc-decorator/core";
import {OutgoingHttpHeaders} from "http";

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

    end(): this {
        this.response.end();
        return this;
    }
    setHeader(name: string, value: number | string | string[]): this {
        this.response.setHeader(name, value);
        return this;
    };
    removeHeader(name: string): this {
        this.response.removeHeader(name);
        return this;
    };
    getHeader(name: string): number | string | string[] | undefined {
        return this.response.getHeader(name);
    };
    getHeaders(): OutgoingHttpHeaders {
        return this.response.getHeaders();
    };

}

export {ExpressResponse};
