import { Request, Response } from 'express'
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { userInfo } from 'os';


class AuthController{
    async authenticate(request: Request, response: Response){
        try{
            const {_id, password } = await User.findOne({email: request.body.email })

            if(await Crypto.compare(request.body.password, password)){
                const token = jwt.sign({ _id }, process.env.SECRET,{})
            }
        }
    }
}

export default new AuthController;