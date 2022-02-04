import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { HttpException } from '../exceptions/HttpException';

export const formatResponse = (
  { includeTimestamp, includeExceptionName },
  response,
  error: Error
) => {
  if (error instanceof HttpException) {
    const { message } = error;

    return {
      ...response,
      statusCode: error.getStatusCode(),
      body: JSON.stringify({
        timestamp: includeTimestamp ? error.getTimeStamp() : undefined,
        status: error.getStatusCode(),
        exception: includeExceptionName ? error.getExceptionName() : undefined,
        message,
        details: error.getDetails(),
      }),
    };
  }

  return {
    ...response,
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    body: JSON.stringify({
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
    }),
  };
};
