import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class InternalServerErrorException extends HttpException {
  constructor(message: string = ReasonPhrases.INTERNAL_SERVER_ERROR) {
    super(message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

export { InternalServerErrorException };
