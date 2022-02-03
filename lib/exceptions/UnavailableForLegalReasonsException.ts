import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class UnavailableForLegalReasonsException extends HttpException {
  constructor(message: string = ReasonPhrases.UNAVAILABLE_FOR_LEGAL_REASONS) {
    super(message, StatusCodes.UNAVAILABLE_FOR_LEGAL_REASONS);
  }
}

export { UnavailableForLegalReasonsException };
