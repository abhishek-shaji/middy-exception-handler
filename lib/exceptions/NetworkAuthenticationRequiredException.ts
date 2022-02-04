import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class NetworkAuthenticationRequiredException extends HttpException {
  constructor(message: string = ReasonPhrases.NETWORK_AUTHENTICATION_REQUIRED, details?: any) {
    super(
      message,
      'NetworkAuthenticationRequiredException',
      StatusCodes.NETWORK_AUTHENTICATION_REQUIRED,
      details
    );
  }
}

export { NetworkAuthenticationRequiredException };
