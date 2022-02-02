import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class NotAcceptableException extends HttpException {
  constructor(message: string = ReasonPhrases.NOT_ACCEPTABLE) {
    super(message, StatusCodes.NOT_ACCEPTABLE);
  }
}

export { NotAcceptableException };
