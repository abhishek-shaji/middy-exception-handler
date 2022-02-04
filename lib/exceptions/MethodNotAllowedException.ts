import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class MethodNotAllowedException extends HttpException {
  constructor(message: string = ReasonPhrases.METHOD_NOT_ALLOWED, details?: any) {
    super(message, 'MethodNotAllowedException', StatusCodes.METHOD_NOT_ALLOWED, details);
  }
}

export { MethodNotAllowedException };
