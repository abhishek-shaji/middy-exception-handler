import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class HttpVersionNotSupportedException extends HttpException {
  constructor(message: string = ReasonPhrases.HTTP_VERSION_NOT_SUPPORTED, details?: any) {
    super(
      message,
      'HttpVersionNotSupportedException',
      StatusCodes.HTTP_VERSION_NOT_SUPPORTED,
      details
    );
  }
}

export { HttpVersionNotSupportedException };
