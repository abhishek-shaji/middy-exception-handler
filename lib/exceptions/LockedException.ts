import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class LockedException extends HttpException {
  constructor(message: string = ReasonPhrases.LOCKED, details?: any) {
    super(message, 'LockedException', StatusCodes.LOCKED, details);
  }
}

export { LockedException };
