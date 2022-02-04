import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class InternalServerErrorException extends HttpException {
  constructor(message: string = ReasonPhrases.INTERNAL_SERVER_ERROR, details?: any) {
    super(message, 'InternalServerErrorException', StatusCodes.INTERNAL_SERVER_ERROR, details);
  }
}

export { InternalServerErrorException };
