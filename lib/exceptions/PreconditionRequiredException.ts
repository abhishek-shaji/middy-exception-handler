import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class PreconditionRequiredException extends HttpException {
  constructor(message: string = ReasonPhrases.PRECONDITION_REQUIRED, details?: any) {
    super(message, 'PreconditionRequiredException', StatusCodes.PRECONDITION_REQUIRED, details);
  }
}

export { PreconditionRequiredException };
