# Introduction

This repository is exploring how to use the [`buf`](https://buf.build) ecosystem with TypeScript. It includes the following:
* Protocol Buffer service definitions in the `proto` directory
* client and server implementations in the `src` directory
* `buf` config files for code generation (`buf.gen.yaml` and for other functions `buf.yaml`).

You can push this repo to the [Buf Schema
Registry](https://buf.build/docs/tutorials/getting-started-with-bsr#push-the-module).
The default repo is located at https://buf.build/maxdumas/connect-example. This repository contains automatically-generated clients according to the plugins defined in `buf.gen.yaml`.

## Getting Started

```
nvm use
npm install
npx buf generate # Generate Typescript types for protobufs

npx buf lint # Lint the protobuf definitions
npx buf breaking # Detect breaking changes in the protobuf definitions
 # Push the protobuf definition to be built on the BSR. It must be manually tagged with the associated git commit, if that is desired.
npx buf push --tag "$(git rev-parse HEAD)"

npm i @buf/maxdumas_connect-example.bufbuild_connect-es@latest # Install the latest auto-generated typescript definitions from BSR
npx tsx src/server.ts # Start the server
npx tsx src/client.ts # Run a sample request against the server using a generated client

```

