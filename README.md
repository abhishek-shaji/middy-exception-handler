# Middy Exception Handler

![github checks](https://badgen.net/github/checks/middy-exception-handler) ![current version @ npm](https://badgen.net/npm/v/middy-exception-handler) ![weekly downloads @ npm](https://badgen.net/npm/dw/middy-exception-handler) ![minified size](https://badgen.net//bundlephobia/min/middy-exception-handler)

#### HTTP exception handler middleware for the middy framework, the stylish Node.js middleware engine for AWS Lambda

Automatically handles any uncaught errors and creates a proper HTTP response for them (using the message and the status code provided by `HttpException` class). 
This exception handler was inspired by Nest.js's built-in exception filters.

This middleware should be set as the last error handler unless you also want to register the `http-reponse-serializer`. If so, this middleware should come second-last and the `http-response-serializer` should come last.

This is an alternative to [standard Middy error handler](https://github.com/middyjs/middy/tree/master/packages/http-error-handler) with the following differences:

- it contains built in exception classes
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

## Example

The response argument defines the JSON response body. It can be a string or an object as described below.
The status argument defines the HTTP status code.

```javascript
import middy from '@middy/core';
import { NotFoundException, exceptionHandler } from 'middy-exception-handler';

const handler = middy(() => {
  throw new NotFoundException();
});

handler
  .use(exceptionHandler());

// when Lambda runs the handler...
handler({}, {}, (_, response) => {
  expect(response).toEqual({
    statusCode: 404,
    body: JSON.stringify({ status: 404, message: 'Not Found' }),
  })
})
```

## Usage

The `HttpException` constructor takes two required arguments which determines the response:
- `statusCode`: defaults to the HTTP status code provided in the status argument 
- `message`: a short description of the HTTP error

### Full list of exceptions
- BadGatewayException
- BadRequestException
- ConflictException
- ForbiddenException
- GatewayTimeoutException
- GoneException
- HttpVersionNotSupportedException
- ImATeapotException
- InsufficientSpaceOnResourceException
- InsufficientStorageException
- InternalServerErrorException
- LockedException
- MethodNotAllowedException
- NetworkAuthenticationRequiredException
- NotAcceptableException
- NotFoundException
- NotImplementedException
- PaymentRequiredException
- PreconditionRequiredException
- RequestHeaderFieldsTooLargeException
- RequestTimeoutException
- RequestTooLongException
- RequestURITooLongException
- ServiceUnavailableException
- TooManyRequestsException
- UnauthorizedException
- UnavailableForLegalReasonsException
- UnprocessableEntityException
- UnsupportedMediaTypeException

### Using a custom message
```javascript
const handler = middy(() => {
  throw new UnauthorizedException('A custom message');
});
```

response:
```json
{
  "status": 401,
  "message": "A custom message"
}
```

### Include additional details in response
```javascript
const handler = middy(() => {
  throw new UnauthorizedException('A custom message', { abcd: 'efg' });
});
```

response:
```json
{
  "status": 401,
  "message": "A custom message",
  "details": {
    "abcd": "efg"
  }
}
```

### Exception name and timestamp
You can also configure to include a timestamp and exception name to the response:

```javascript
handler
  .use(exceptionHandler({ includeTimestamp: true, includeExceptionName: true }));
```

response:
```json
{
  "timestamp": "2022-02-04T14:41:22.457Z",
  "status": 401,
  "exception": "BadRequestException",
  "message": "A custom message"
}
```

## Contributing

Everyone is very welcome to contribute to this repository. Feel free to [raise issues](https://github.com/abhishek-shaji/middy-exception-handler/issues) or to [submit Pull Requests](https://github.com/abhishek-shaji/middy-exception-handler/pulls).
