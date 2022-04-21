import { Request, Response, NextFunction } from 'express';
import 'dotenv/config';
import jwt from 'jsonwebtoken';

class AuthToken {
    verify (request: Request, response: Response, next: NextFunction){
        let token = request.headers.authorization

        if(!token) return response.status(400).send({ code: 'auth/no-token-provided', message: 'No token provide.'})

        if(token.startsWith('Bearer ')){
            token = token.slice(7, token.length);
        }

        jwt.verify(token, process.env.SECRET, function(error, decoded){
            if(error) return response.status(401).send({ code: 'auth/failed-to-authenticate', message: 'Failed to authenticate token'});
            next();
        })
    }
}

export default new AuthToken();