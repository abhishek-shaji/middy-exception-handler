import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class HttpVersionNotSupportedException extends HttpException {
  constructor(message: string = ReasonPhrases.HTTP_VERSION_NOT_SUPPORTED) {
    super(message, StatusCodes.HTTP_VERSION_NOT_SUPPORTED);
  }
}

export { HttpVersionNotSupportedException };
