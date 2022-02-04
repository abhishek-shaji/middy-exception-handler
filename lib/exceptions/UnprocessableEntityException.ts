import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class UnprocessableEntityException extends HttpException {
  constructor(message: string = ReasonPhrases.UNPROCESSABLE_ENTITY, details?: any) {
    super(message, 'UnprocessableEntityException', StatusCodes.UNPROCESSABLE_ENTITY, details);
  }
}

export { UnprocessableEntityException };
