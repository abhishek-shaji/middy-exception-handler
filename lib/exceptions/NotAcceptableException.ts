import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class NotAcceptableException extends HttpException {
  constructor(message: string = ReasonPhrases.NOT_ACCEPTABLE, details?: any) {
    super(message, 'NotAcceptableException', StatusCodes.NOT_ACCEPTABLE, details);
  }
}

export { NotAcceptableException };
