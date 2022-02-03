import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class UnauthorizedException extends HttpException {
  constructor(message: string = ReasonPhrases.UNAUTHORIZED) {
    super(message, StatusCodes.UNAUTHORIZED);
  }
}

export { UnauthorizedException };
