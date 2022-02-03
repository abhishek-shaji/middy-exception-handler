import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class InsufficientSpaceOnResourceException extends HttpException {
  constructor(message: string = ReasonPhrases.INSUFFICIENT_SPACE_ON_RESOURCE) {
    super(message, StatusCodes.INSUFFICIENT_SPACE_ON_RESOURCE);
  }
}

export { InsufficientSpaceOnResourceException };
