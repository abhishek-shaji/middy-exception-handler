import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class RequestTooLongException extends HttpException {
  constructor(message: string = ReasonPhrases.REQUEST_TOO_LONG) {
    super(message, StatusCodes.REQUEST_TOO_LONG);
  }
}

export { RequestTooLongException };
