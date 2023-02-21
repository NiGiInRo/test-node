const internalError = (message, internalCode) => ({
    message,
    internalCode
  });
  
  exports.DATABASE_ERROR = 'database_error';
  exports.databaseError = message => internalError(message, exports.DATABASE_ERROR);
  
  exports.DEFAULT_ERROR = 'default_error';
  exports.defaultError = message => internalError(message, exports.DEFAULT_ERROR);
  
  exports.API_ERROR = 'api_error';
  exports.apiError = message => internalError(message, exports.API_ERROR);
  
  exports.TOKEN_ERROR = 'token_error';
  exports.tokenError = message => internalError(message, exports.TOKEN_ERROR);
  
  exports.BAD_REQUEST_ERROR = 'bad_request_error';
  exports.badRequestError = message => internalError(message, exports.BAD_REQUEST_ERROR);
  