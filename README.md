## Install.

Install with [npm](https://www.npmjs.com/):
```sh
$ npm install --save fornex-node
```

## Usage.

```ts
import { FornexClient } from "fornex-node";

const client = new FornexClient("...");

await client.getAccountBalance();
```
