# Middy Exception Handler

![github checks](https://badgen.net/github/checks/middy-exception-handler)

![current version @ npm](https://badgen.net/npm/v/middy-exception-handler)

![weekly downloads @ npm](https://badgen.net/npm/dw/middy-exception-handler)

![minified size](https://badgen.net//bundlephobia/min/middy-exception-handler)

#### HTTP error handler middleware for the middy framework, the stylish Node.js middleware engine for AWS Lambda

Automatically handles any uncaught errors and creates a proper HTTP response
for them (using the message and the status code provided by the error object). We recommend generating these HTTP errors with the npm module [`http-errors`](https://npm.im/http-errors).

This middleware should be set as the last error handler unless you also want to register the `http-reponse-serializer`. If so, this middleware should come second-last and the `http-response-serializer` should come last.

This is an alternative to [standard Middy error handler](https://github.com/middyjs/middy/tree/master/packages/http-error-handler) with the following differences:

- it always returns JSON object and not text
- it handles any uncaught error, not just the ones with `statusCode` and `message`

## Install

To install this middleware you can use NPM:

```bash

npm install --save middy-exception-handler

```

## Options

- `logger` (defaults to `console`) - a logging function that is invoked with the current error as an argument. You can pass `false` if you don't want the logging to happen.
- `level` (defaults to `error`) - log level to use for the error log entry

## Sample usage

```javascript
import middy from '@middy/core';
import { NotFoundException, exceptionHandler } from 'middy-exception-handler';

const handler = middy(() => {
  throw new NotFoundException('Item not found!');
});

handler
  .use(exceptionHandler());

// when Lambda runs the handler...
handler({}, {}, (_, response) => {
  expect(response).toEqual({
    statusCode: 404,
    body: JSON.stringify({ status: 404, message: 'Item not found!' }),
  })
})
```

## Contributing

Everyone is very welcome to contribute to this repository. Feel free to [raise issues](https://github.com/https-abhishek/middy-exception-handler/issues) or to [submit Pull Requests](https://github.com/https-abhishek/middy-exception-handler/pulls).
