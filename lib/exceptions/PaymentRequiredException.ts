import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class PaymentRequiredException extends HttpException {
  constructor(message: string = ReasonPhrases.PAYMENT_REQUIRED) {
    super(message, StatusCodes.PAYMENT_REQUIRED);
  }
}

export { PaymentRequiredException };
