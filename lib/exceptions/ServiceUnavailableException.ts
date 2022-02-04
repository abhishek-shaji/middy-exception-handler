import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class ServiceUnavailableException extends HttpException {
  constructor(message: string = ReasonPhrases.SERVICE_UNAVAILABLE, details?: any) {
    super(message, 'ServiceUnavailableException', StatusCodes.SERVICE_UNAVAILABLE, details);
  }
}

export { ServiceUnavailableException };
