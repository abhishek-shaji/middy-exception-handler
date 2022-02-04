import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class GatewayTimeoutException extends HttpException {
  constructor(message: string = ReasonPhrases.GATEWAY_TIMEOUT, details?: any) {
    super(message, 'GatewayTimeoutException', StatusCodes.GATEWAY_TIMEOUT, details);
  }
}

export { GatewayTimeoutException };
