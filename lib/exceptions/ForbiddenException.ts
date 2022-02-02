import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class ForbiddenException extends HttpException {
  constructor(message: string = ReasonPhrases.FORBIDDEN) {
    super(message, StatusCodes.FORBIDDEN);
  }
}

export { ForbiddenException };
