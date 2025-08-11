class ApiRespoonse {
  constructor(statusCode, data, message = 'Success'){
    this.statusCode = statusCode,
    this.data = data,
    this.message = message,
    this.success = statusCode >= 200 && statusCode < 300;
  }
}

export default ApiRespoonse