import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class NotFoundException extends HttpException {
  constructor(message: string = ReasonPhrases.NOT_FOUND, details?: any) {
    super(message, 'NotFoundException', StatusCodes.NOT_FOUND, details);
  }
}

export { NotFoundException };
