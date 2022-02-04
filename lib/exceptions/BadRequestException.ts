import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class BadRequestException extends HttpException {
  constructor(message: string = ReasonPhrases.BAD_REQUEST, details?: any) {
    super(message, 'BadRequestException', StatusCodes.BAD_REQUEST, details);
  }
}

export { BadRequestException };
