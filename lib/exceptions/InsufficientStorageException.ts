import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class InsufficientStorageException extends HttpException {
  constructor(message: string = ReasonPhrases.INSUFFICIENT_STORAGE) {
    super(message, StatusCodes.INSUFFICIENT_STORAGE);
  }
}

export { InsufficientStorageException };
