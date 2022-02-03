import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class UnprocessableEntityException extends HttpException {
  constructor(message: string = ReasonPhrases.UNPROCESSABLE_ENTITY) {
    super(message, StatusCodes.UNPROCESSABLE_ENTITY);
  }
}

export { UnprocessableEntityException };
