import { BaseException } from './exceptions/BaseException';

export const exceptionHandler = ({ logger = console, level = 'error' } = {}) => ({
  onError: async (handler): Promise<any> => {
    const { error } = handler;

    if (typeof logger[level] === 'function') {
      logger[level]({
        error,
      });
    }

    if (error instanceof BaseException) {
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
        body: JSON.stringify({ status: 500, message: 'Internal Server Error' }),
      };
    }
  },
});
