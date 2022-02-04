export interface ExceptionHandlerConfig {
  logger: any | Console;
  level: string;
  includeTimestamp: boolean;
  includeExceptionName: boolean;
}

export interface ResponseBody {
  status: number;
  message: string;
  details?: any;
  timestamp?: string;
  exception?: string;
}
