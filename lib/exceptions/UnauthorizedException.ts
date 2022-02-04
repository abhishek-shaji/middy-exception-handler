import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class UnauthorizedException extends HttpException {
  constructor(message: string = ReasonPhrases.UNAUTHORIZED, details?: any) {
    super(message, 'UnauthorizedException', StatusCodes.UNAUTHORIZED, details);
  }
}

export { UnauthorizedException };
