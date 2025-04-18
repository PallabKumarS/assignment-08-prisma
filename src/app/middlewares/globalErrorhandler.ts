/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from 'express';

import config from '../config';
import { AppError } from '../errors/AppError';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  //setting default values
  let statusCode = 500;
  let message = 'Something went wrong!';

  // custom error here
  if (err instanceof AppError) {
    statusCode = err?.statusCode;
    message = err.message;
  }

  // default error here
  else if (err instanceof Error) {
    message = err.message;
  }

  //ultimate return
  res.status(statusCode).json({
    success: false,
    message,
    stack: config.node_env === 'development' ? err?.stack : null,
  });
};

export default globalErrorHandler;
