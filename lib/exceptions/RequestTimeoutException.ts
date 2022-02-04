import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class RequestTimeoutException extends HttpException {
  constructor(message: string = ReasonPhrases.REQUEST_TIMEOUT, details?: any) {
    super(message, 'RequestTimeoutException', StatusCodes.REQUEST_TIMEOUT, details);
  }
}

export { RequestTimeoutException };
