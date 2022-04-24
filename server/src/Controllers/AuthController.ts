import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { IUser } from '../interfaces';

import User from '../schemas/User';
import Crypto from '../utils/crypto'

class AuthController {
  public async authenticate (request: Request, response: Response): Promise<Response> {
    try {
      const { _id, password, name } = await User.findOne({ email: request.body.email })

      if (await Crypto.compare(request.body.password, password)) {
        const token = jwt.sign({ _id }, process.env.SECRET || '', {
          expiresIn: 60 * 10
        })
        return response.json({ auth: true, accessToken: token, name: name })
      } else {
        return response.status(401).json({ auth: false, error: 'auth invalid credentials' })
      }
    } catch (error) {
      return response.status(400).json({ auth: false, error: 'auth invalid credentials' })
    }
  }
}

export default new AuthController()