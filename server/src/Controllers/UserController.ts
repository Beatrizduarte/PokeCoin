import { Request, Response } from 'express'
import jwtDecode, { JwtPayload } from 'jwt-decode';

import User from '../schemas/User'
import Crypto from '../utils/crypto';

class UserController {
    async list (request: Request, response: Response){
      try {

        const token = request.headers.authorization?.replace('Bearer ', '');
  
        if(token){
          const userDecode = jwtDecode<JwtPayload>(token);
          const userID = userDecode._id;
  
          const { name, wallet } = await User.findById({_id: userID});
  
          const data = { 
            name,
            wallet,
          }
  
          return response.status(200).json(data);
  
        }else{
          response.status(401).json({
            error: 'Invalid token'
          })
        }
      } catch (error) {
        response.status(500).json({ error: error.message })
      }

    }

   async create (request: Request, response: Response){

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