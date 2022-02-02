class BaseException extends Error {
  constructor(message: string = 'Not Found', readonly statusCode: number) {
    super();
    this.message = message;
  }
}

export { BaseException };
