const ClientErrorCodes = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404
};

const ServerErrorCodes = {
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503
};

const SuccessCodes = {
  OK: 200,
  CREATED: 201
};

module.exports = {
  ClientErrorCodes,
  ServerErrorCodes,
  SuccessCodes
};
