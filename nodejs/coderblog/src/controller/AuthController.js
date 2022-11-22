const jwt = require('jsonwebtoken')
const { PRIVATE_KEY, TOKEM_TIME } = require('../app/config')
class AuthController {
  async login(ctx, next) {
    const { id, username } = ctx.user
    const token = jwt.sign({ id, username }, PRIVATE_KEY,{
      expiresIn: TOKEM_TIME,
      algorithm: 'RS256'
    })
    ctx.body = {
      id,
      username,
      token
    }
  }
}

module.exports = new AuthController()