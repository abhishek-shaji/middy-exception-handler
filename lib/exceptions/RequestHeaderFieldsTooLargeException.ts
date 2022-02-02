import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class RequestHeaderFieldsTooLargeException extends HttpException {
  constructor(message: string = ReasonPhrases.REQUEST_HEADER_FIELDS_TOO_LARGE) {
    super(message, StatusCodes.REQUEST_HEADER_FIELDS_TOO_LARGE);
  }
}

export { RequestHeaderFieldsTooLargeException };
