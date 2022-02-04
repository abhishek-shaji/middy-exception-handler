class HttpException extends Error {
  public timestamp: Date;

  constructor(
    message: string,
    private readonly exceptionName: string,
    private readonly statusCode: number,
    private readonly details?: any
  ) {
    super(message);
    this.name = this.constructor.name;
    this.timestamp = new Date();
  }

  public getStatusCode(): number {
    return this.statusCode;
  }

  public getTimeStamp(): string {
    return this.timestamp.toISOString();
  }

  public getExceptionName(): string {
    return this.exceptionName;
  }

  public getDetails(): string {
    return this.details;
  }
}

export { HttpException };
