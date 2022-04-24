import { Request, Response } from 'express'
import 'dotenv/config';
import { pokemonApi } from '../api';

class PokemonController {
    async list(request: Request, response: Response){

        const { pokemonPerPage, currentPage} = request.query;

        try{
            const { data } = await pokemonApi.get(`pokemon?limit=${pokemonPerPage}&offset=${currentPage}`);

            Promise.all(data.results.map(async (pokemon: any) => {
                return await pokemonApi.get(`${pokemon.url}`).then(({ data: { id, name, sprites: { other }, base_experience ,types } }) => {
                    return {
                        id,
                        name,
                        image: other['official-artwork']['front_default'],
                        base_experience,
                        types
                    }
                })
            })).then((pokemons: any[]) => {
                response.status(200).json(pokemons);
            })
        } catch(err: any){
            response.status(400).json({
                error: 'Unexpected error',
                message: err.message
            })
        }
    }

};


export default new PokemonController;