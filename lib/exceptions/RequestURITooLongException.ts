import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class RequestURITooLongException extends HttpException {
  constructor(message: string = ReasonPhrases.REQUEST_URI_TOO_LONG, details?: any) {
    super(message, 'RequestURITooLongException', StatusCodes.REQUEST_URI_TOO_LONG, details);
  }
}

export { RequestURITooLongException };
