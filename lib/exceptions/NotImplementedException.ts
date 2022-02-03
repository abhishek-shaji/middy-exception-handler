import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class NotImplementedException extends HttpException {
  constructor(message: string = ReasonPhrases.NOT_IMPLEMENTED) {
    super(message, StatusCodes.NOT_IMPLEMENTED);
  }
}

export { NotImplementedException };
