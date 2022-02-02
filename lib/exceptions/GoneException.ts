import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class GoneException extends HttpException {
  constructor(message: string = ReasonPhrases.GONE) {
    super(message, StatusCodes.GONE);
  }
}

export { GoneException };
