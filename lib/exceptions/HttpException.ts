
class HttpException extends Error {
  constructor(message: string, readonly statusCode: number) {
    super(message);
  }
}

export { HttpException };
