import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class PreconditionRequiredException extends HttpException {
  constructor(message: string = ReasonPhrases.PRECONDITION_REQUIRED) {
    super(message, StatusCodes.PRECONDITION_REQUIRED);
  }
}

export { PreconditionRequiredException };
