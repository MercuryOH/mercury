const jwt = require('jsonwebtoken')

/**
 * Creates a webtoken with a payload.
 * Token expires in 24 hours from creation.
 *
 * @param {object} payload Data to encode in json web token
 *
 * @returns {string} json web token
 */
exports.createJWT = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' })
}
