import { ElizaService } from "@buf/maxdumas_connect-example.bufbuild_connect-es/eliza_connect.js";
import { ConnectRouter } from "@bufbuild/connect";

export default (router: ConnectRouter) =>
    router.service(ElizaService, {
        async say(req) {
            return {
                sentence: `Yousa said ${req.sentence}. Why yousa saying dis?`
            }
        }
    })
