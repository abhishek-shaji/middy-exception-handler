import { BaseException } from './BaseException';

class NotFoundException extends BaseException {
  constructor(message: string = 'Not Found') {
    super(message, 404);
  }
}

export { NotFoundException };
