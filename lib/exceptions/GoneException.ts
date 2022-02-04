import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class GoneException extends HttpException {
  constructor(message: string = ReasonPhrases.GONE, details?: any) {
    super(message, 'GoneException', StatusCodes.GONE, details);
  }
}

export { GoneException };
