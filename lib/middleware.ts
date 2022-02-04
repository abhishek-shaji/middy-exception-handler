import { formatResponse } from './utils/formatResponse';

interface ExceptionHandlerConfig {
  logger: any | Console;
  level: string;
  includeTimestamp: boolean;
  includeExceptionName: boolean;
}

export const exceptionHandler = (config: ExceptionHandlerConfig) => ({
  onError: async (handler): Promise<any> => {
    const {
      logger = console,
      level = 'error',
      includeTimestamp = false,
      includeExceptionName = false,
    } = config;

    const { error } = handler;

    if (typeof logger[level] === 'function') {
      logger[level]({
        error,
      });
    }

    handler.response = formatResponse(
      { includeTimestamp, includeExceptionName },
      handler.response,
      error
    );
  },
});
