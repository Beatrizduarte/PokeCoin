import { Request, Response } from 'express'
import 'dotenv/config';
import { bitcoinApi } from '../api';

class CurrencyController {
    async list(request: Request, response: Response){
        try{
            const { data } = await bitcoinApi.get('BTC/ticker/');

            response.status(200).json(data);
        }catch(err){
            response.status(400).json({
                error: 'Unexpected error'
            })
        }
    }
};


export default new CurrencyController;