import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class MethodNotAllowedException extends HttpException {
  constructor(message: string = ReasonPhrases.METHOD_NOT_ALLOWED) {
    super(message, StatusCodes.METHOD_NOT_ALLOWED);
  }
}

export { MethodNotAllowedException };
