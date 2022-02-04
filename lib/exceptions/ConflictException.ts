import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class ConflictException extends HttpException {
  constructor(message: string = ReasonPhrases.CONFLICT, details?: any) {
    super(message, 'ConflictException', StatusCodes.CONFLICT, details);
  }
}

export { ConflictException };
