import { createPromiseClient } from "@bufbuild/connect";
import { ElizaService } from "../gen/eliza_connect.js";
import { createConnectTransport } from "@bufbuild/connect-node"

const transport = createConnectTransport({
    baseUrl: "http://localhost:8080",
    httpVersion: "1.1",
});

const client = createPromiseClient(ElizaService, transport)
const res = await client.say({ sentence: "I feel good"});
console.log(res);
