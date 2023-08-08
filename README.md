# Introduction

This repository is exploring how to use the buf ecosystem with TypeScript. It includes the following:
* Protocol Buffer service definitions in the `proto` directory
* client and server implementations in the `src` directory

## Getting Started

```
nvm use
npm install
npx buf generate # Generate Typescript types for protobufs
npx tsx src/server.ts # Start the server
npx tsx src/client.ts # Run a sample request against the server using a generated client

npx buf lint # Lint the protobuf definitions
npx buf breaking # Detect breaking changes in the protobuf definitions
```