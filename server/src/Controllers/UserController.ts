import { Request, Response } from 'express'
import _ from 'lodash'

import User from '../schemas/User'
import Crypto from '../utils/crypto';

class UserController {
    async list (request: Request, response: Response){
    const users = await User.find()

    return response.json(users)
  }

  public async create (request: Request, response: Response){

    try{
      const user = await User.findOne({ $or: [{ 'email': request.body.email }]})

      if(user){

        return response.status(400).json({ error: 'email already registered'});

      }else{
        
        request.body.password = await Crypto.encrypt(request.body.password);

        const createUser = await User.create(request.body);

        return response.status(200).json(createUser);
      }

    }catch(error:any){
      return response.status(400).json({
        error: 'Unexpected error',
        message: error.message
      })
    }
  }
}

export default new UserController()