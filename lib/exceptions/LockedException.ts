import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class LockedException extends HttpException {
  constructor(message: string = ReasonPhrases.LOCKED) {
    super(message, StatusCodes.LOCKED);
  }
}

export { LockedException };
