import {Controller} from "@node-mvc-decorator/core/lib/decorators/controller";
import {GetMapping} from "@node-mvc-decorator/core/lib/decorators/get-mapping";
import {bootstrap} from "./bootstrap";
import {ExpressRequest} from "./express-request";

@Controller
export class A {

    @GetMapping('/')
    testGet() {
        console.log(123231123);
        return 'wer';
    }

}

bootstrap(A).listen(3000, () => console.log('启动成功'));

