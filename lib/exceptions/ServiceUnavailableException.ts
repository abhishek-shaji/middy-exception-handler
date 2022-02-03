import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class ServiceUnavailableException extends HttpException {
  constructor(message: string = ReasonPhrases.SERVICE_UNAVAILABLE) {
    super(message, StatusCodes.SERVICE_UNAVAILABLE);
  }
}

export { ServiceUnavailableException };
