import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class GatewayTimeoutException extends HttpException {
  constructor(message: string = ReasonPhrases.GATEWAY_TIMEOUT) {
    super(message, StatusCodes.GATEWAY_TIMEOUT);
  }
}

export { GatewayTimeoutException };
