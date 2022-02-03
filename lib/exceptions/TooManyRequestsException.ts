import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class TooManyRequestsException extends HttpException {
  constructor(message: string = ReasonPhrases.TOO_MANY_REQUESTS) {
    super(message, StatusCodes.TOO_MANY_REQUESTS);
  }
}

export { TooManyRequestsException };
