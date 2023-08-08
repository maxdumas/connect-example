import { ElizaService } from "../gen/eliza_connect";
import { ConnectRouter } from "@bufbuild/connect";

export default (router: ConnectRouter) =>
    router.service(ElizaService, {
        async say(req) {
            return {
                sentence: `Yousa said ${req.sentence}. Why yousa saying dis?`
            }
        }
    })
