import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class UnsupportedMediaTypeException extends HttpException {
  constructor(message: string = ReasonPhrases.UNSUPPORTED_MEDIA_TYPE, details?: any) {
    super(message, 'UnsupportedMediaTypeException', StatusCodes.UNSUPPORTED_MEDIA_TYPE, details);
  }
}

export { UnsupportedMediaTypeException };
