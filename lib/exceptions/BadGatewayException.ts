import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class BadGatewayException extends HttpException {
  constructor(message: string = ReasonPhrases.BAD_GATEWAY) {
    super(message, StatusCodes.BAD_GATEWAY);
  }
}

export { BadGatewayException };
