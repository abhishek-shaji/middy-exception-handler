import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class RequestTimeoutException extends HttpException {
  constructor(message: string = ReasonPhrases.REQUEST_TIMEOUT) {
    super(message, StatusCodes.REQUEST_TIMEOUT);
  }
}

export { RequestTimeoutException };
