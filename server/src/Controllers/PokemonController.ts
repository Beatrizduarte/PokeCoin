import { Request, Response } from 'express'
import 'dotenv/config';
import { pokemonApi } from '../api';

class pokemonController {
    async list(request: Request, response: Response){

        const { pokemonPerPage, currentPage} = request.query;

        try{
            const { data } = await pokemonApi.get(`/pokemon?limit=${pokemonPerPage}&offset=${currentPage}`);

            response.status(200).json(data);
        }catch(err){
            response.status(400).json({
                error: 'Unexpected error'
            })
        }
    }
};


export default new pokemonController;