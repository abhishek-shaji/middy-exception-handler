import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class NetworkAuthenticationRequiredException extends HttpException {
  constructor(message: string = ReasonPhrases.NETWORK_AUTHENTICATION_REQUIRED) {
    super(message, StatusCodes.NETWORK_AUTHENTICATION_REQUIRED);
  }
}

export { NetworkAuthenticationRequiredException };
