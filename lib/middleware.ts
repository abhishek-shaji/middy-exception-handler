import { HttpException } from './exceptions/HttpException';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

export const exceptionHandler = ({ logger = console, level = 'error' } = {}) => ({
  onError: async (handler): Promise<any> => {
    const { error } = handler;

    if (typeof logger[level] === 'function') {
      logger[level]({
        error,
      });
    }

    if (error instanceof HttpException) {
      const { statusCode, message } = error;
      handler.response = {
        ...handler.response,
        statusCode,
        body: JSON.stringify({ status: statusCode, message }),
      };
    } else {
      handler.response = {
        ...handler.response,
        statusCode: 500,
        body: JSON.stringify({
          status: StatusCodes.INTERNAL_SERVER_ERROR,
          message: ReasonPhrases.INTERNAL_SERVER_ERROR,
        }),
      };
    }
  },
});
