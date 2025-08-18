class ApiError extends Error {
  constructor(statusCode, message, errors = []) {
    super(message); 
    this.statusCode = statusCode || 500;
    this.errors = errors;
    this.success = false;


    Error.captureStackTrace(this, this.constructor);
  }
}

export default ApiError;
