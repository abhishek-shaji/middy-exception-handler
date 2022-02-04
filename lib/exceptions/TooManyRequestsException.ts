import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class TooManyRequestsException extends HttpException {
  constructor(message: string = ReasonPhrases.TOO_MANY_REQUESTS, details?: any) {
    super(message, 'TooManyRequestsException', StatusCodes.TOO_MANY_REQUESTS, details);
  }
}

export { TooManyRequestsException };
