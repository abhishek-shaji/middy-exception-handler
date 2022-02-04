import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from './HttpException';

class InsufficientStorageException extends HttpException {
  constructor(message: string = ReasonPhrases.INSUFFICIENT_STORAGE, details?: any) {
    super(message, 'InsufficientStorageException', StatusCodes.INSUFFICIENT_STORAGE, details);
  }
}

export { InsufficientStorageException };
