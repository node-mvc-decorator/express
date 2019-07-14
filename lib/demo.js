"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("@node-mvc-decorator/core/lib/decorators/controller");
const get_mapping_1 = require("@node-mvc-decorator/core/lib/decorators/get-mapping");
const bootstrap_1 = require("./bootstrap");
const express_request_1 = require("./express-request");
let A = class A {
    testGet() {
        console.log(123231123);
        return 'wer';
    }
};
__decorate([
    get_mapping_1.GetMapping('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], A.prototype, "testGet", null);
A = __decorate([
    controller_1.Controller
], A);
exports.A = A;
bootstrap_1.bootstrap(A).listen(3000, () => console.log('启动成功'));
new express_request_1.ExpressRequest(null);
