import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class ConflictException extends HttpException {
  constructor(message: string = ReasonPhrases.CONFLICT) {
    super(message, StatusCodes.CONFLICT);
  }
}

export { ConflictException };
