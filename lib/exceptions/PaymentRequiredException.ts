import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class PaymentRequiredException extends HttpException {
  constructor(message: string = ReasonPhrases.PAYMENT_REQUIRED, details?: any) {
    super(message, 'PaymentRequiredException', StatusCodes.PAYMENT_REQUIRED, details);
  }
}

export { PaymentRequiredException };
