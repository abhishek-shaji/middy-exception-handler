import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class NotImplementedException extends HttpException {
  constructor(message: string = ReasonPhrases.NOT_IMPLEMENTED, details?: any) {
    super(message, 'NotImplementedException', StatusCodes.NOT_IMPLEMENTED, details);
  }
}

export { NotImplementedException };
