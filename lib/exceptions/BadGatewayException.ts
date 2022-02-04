import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class BadGatewayException extends HttpException {
  constructor(message: string = ReasonPhrases.BAD_GATEWAY, details?: any) {
    super(message, 'BadGatewayException', StatusCodes.BAD_GATEWAY, details);
  }
}

export { BadGatewayException };
