import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv/config';

class AuthToken {
  verify (request: Request, response: Response, next: NextFunction) {
    let token = request.headers.authorization

    if (!token) return response.status(400).send({ code: 'auth/no-token-provided', message: 'No token provided.' })

    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length)
    }

    jwt.verify(token, process.env.SECRET as string, function (error, decoded) {
      if (error) return response.status(401).send({ code: 'auth/failed-to-authenticate', message: 'Failed to authenticate token.' })
        next()
    })
  }
}

export default new AuthToken();