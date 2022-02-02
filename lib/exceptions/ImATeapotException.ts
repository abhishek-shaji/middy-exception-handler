import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class ImATeapotException extends HttpException {
  constructor(message: string = ReasonPhrases.IM_A_TEAPOT) {
    super(message, StatusCodes.IM_A_TEAPOT);
  }
}

export { ImATeapotException };
