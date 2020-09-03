import jwt from 'jsonwebtoken'

/**
 * Creates a webtoken with a payload.
 * Token expires in 24 hours from creation.
 *
 * @param {object} payload Data to encode in json web token
 *
 * @returns {string} json web token
 */
const createJWT = (payload: any): string => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' })
}

/**
 * Verifies a web token.
 * If successful, returns token's payload; otherwise
 * throws error
 *
 * @param {string} token json web token to verify
 *
 * @throws {Error} token not valid error
 *
 * @returns {object} token's payload
 */
const verifyJWT = (token: string): any => {
  return jwt.verify(token, process.env.JWT_SECRET)
}

export default { createJWT, verifyJWT }
