class ApiResponse {
  constructor(statusCode, message, data = null) {
    this.success = statusCode < 400;
    this.message = message;
    this.data = data;
    this.statusCode = statusCode;
  }

  static success(message, data = null) {
    return new ApiResponse(200, message, data);
  }

  static created(message, data = null) {
    return new ApiResponse(201, message, data);
  }

  send(res) {
    return res.status(this.statusCode).json({
      success: this.success,
      message: this.message,
      data: this.data,
    });
  }
}

module.exports = ApiResponse;
