const errorTypes = require('../constants/error-types')
const errorInfo = require('../constants/error-info')
const errorHander = (error, ctx) => {
  let status, message;
  switch (error.message) {
    case errorTypes.USERNAME_IS_REQUIRED:
      status = 400
      message = errorInfo.USERNAME_IS_REQUIRED_INFO
      break
    case errorTypes.PASSWORD_IS_REQUIRED:
      status = 400
      message = errorInfo.PASSWORD_IS_REQUIRED_INFO
      break
    case errorTypes.USERNAME_IS_EXISTS:
      status = 409
      message = errorInfo.USERNAME_IS_EXISTED_INFO
      break
    case errorTypes.USERNAME_OR_PW_ERROR:
      status = 409
      message = errorInfo.USERNAME_OR_PW_ERROR_INFO
      break
    case errorTypes.UNAUTHORIZATIN:
      status = 401
      message = errorInfo.UNAUTHORIZATIN_INFO
      break
    case errorTypes.UNPERMISSION:
      status = 401
      message = errorInfo.UNPERMISSION_INFO
      break
    default:
      status = 404
      message = "NOT FOUND"
  }
  console.log('message:', message);
  ctx.status = status
  ctx.body = message
}

module.exports = errorHander