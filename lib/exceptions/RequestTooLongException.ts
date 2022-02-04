import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class RequestTooLongException extends HttpException {
  constructor(message: string = ReasonPhrases.REQUEST_TOO_LONG, details?: any) {
    super(message, 'RequestTooLongException', StatusCodes.REQUEST_TOO_LONG, details);
  }
}

export { RequestTooLongException };
