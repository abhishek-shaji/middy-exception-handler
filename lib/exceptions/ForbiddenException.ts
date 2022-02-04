import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class ForbiddenException extends HttpException {
  constructor(message: string = ReasonPhrases.FORBIDDEN, details?: any) {
    super(message, 'ForbiddenException', StatusCodes.FORBIDDEN, details);
  }
}

export { ForbiddenException };
