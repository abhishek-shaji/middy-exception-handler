import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class InsufficientSpaceOnResourceException extends HttpException {
  constructor(message: string = ReasonPhrases.INSUFFICIENT_SPACE_ON_RESOURCE, details?: any) {
    super(
      message,
      'InsufficientSpaceOnResourceException',
      StatusCodes.INSUFFICIENT_SPACE_ON_RESOURCE,
      details
    );
  }
}

export { InsufficientSpaceOnResourceException };
