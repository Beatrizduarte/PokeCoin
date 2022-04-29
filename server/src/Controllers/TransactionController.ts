import { Request, Response } from 'express'
import jwtDecode, { JwtPayload } from 'jwt-decode';

import Transaction from '../schemas/transaction';
import User from '../schemas/User';

class TransactionController {
    async create (request: Request, response: Response){

        const token = request.headers.authorization?.replace('Bearer ', '');

        if(token) { 
            try{
                const userDecode = jwtDecode<JwtPayload>(token);
                const { pokemonID } = request.body.pokemon; 

                const userID = userDecode._id;
    
                const user = await User.findOne({ _id: userID });
                const userWallet = user?.wallet
                const userHasPokemon = userWallet.find((w) => w.pokemonID === pokemonID)

                if(userHasPokemon){
                    if(request.body.types === "buy"){
                        let { quotas, value } = userHasPokemon;
    
                        quotas = quotas + request.body.info.quotas;
    
                        const newValue = Number(value) + Number(request.body.info.value)
    
                        value = newValue.toString()
    
                        const updatePokemon = await User.updateOne(
                            {_id: userID , "wallet.pokemonID": userHasPokemon.pokemonID}, 
                            { '$set': { 
                            "wallet.$.quotas": quotas,
                            "wallet.$.value": value
                        }})

                        const data = {
                            user: userID,
                            types: request.body.types,
                            name: request.body.pokemon.name,
                            pokemonID: request.body.pokemon.pokemonID,
                            BTCDay: request.body.info.BTCDay,
                            quotas: request.body.info.quotas,
                            value: request.body.info.value,
                        };
        
                        const createTransaction = await Transaction.create(data);
    
                        return response.status(200).json(updatePokemon);

                    }else if(request.body.types === "sell"){
                        let { quotas, value } = userHasPokemon;
    
                        quotas = quotas - request.body.info.quotas;

                        const newValue = Number(value) - Number(request.body.info.value);

                        value = newValue.toString() 
   
                        if(quotas === 0){
                            const removePokemon = await User.updateOne(
                                {_id: userID, "wallet.pokemonID": userHasPokemon.pokemonID}, 
                                { $pull: { wallet: {
                                    pokemonID: userHasPokemon.pokemonID,
                                    name: userHasPokemon.name,
                                    image: userHasPokemon.image,
                                    baseXP: userHasPokemon.baseXP,
                                    types: userHasPokemon.types,
                                    quotas: userHasPokemon.quotas,
                                    value: userHasPokemon.value,
                                 } }
                                })

                                const data = {
                                    user: userID,
                                    types: request.body.types,
                                    name: request.body.pokemon.name,
                                    pokemonID: request.body.pokemon.pokemonID,
                                    BTCDay: request.body.info.BTCDay,
                                    quotas: request.body.info.quotas,
                                    value: request.body.info.value,
                                };
                
                                const createTransaction = await Transaction.create(data);

                                return response.status(200).json(removePokemon);
                        }else{
                            const updatePokemon = await User.updateOne(
                                {_id: userID , "wallet.pokemonID": userHasPokemon.pokemonID}, 
                                { '$set': {
                                "wallet.$.quotas": quotas,
                                "wallet.$.value": value
                            }})

                            const data = {
                                user: userID,
                                types: request.body.types,
                                name: request.body.pokemon.name,
                                pokemonID: request.body.pokemon.pokemonID,
                                BTCDay: request.body.info.BTCDay,
                                quotas: request.body.info.quotas,
                                value: request.body.info.value,
                            };
            
                            const createTransaction = await Transaction.create(data);

                            return response.status(200).json(updatePokemon);
                        }
                        
                    }
                    
                }else if(!userHasPokemon){
                    const updateWallet = await User.updateOne({ _id: userID}, { $push: {wallet: {
                        "pokemonID": request.body.pokemon.pokemonID,
                        "name": request.body.pokemon.name,
                        "image": request.body.pokemon.image,
                        "baseXP": request.body.pokemon.baseXP,
                        "types": request.body.pokemon.types,
                        "quotas": request.body.info.quotas,
                        "value": request.body.info.value,
                    } }});

                    const data = {
                        user: userID,
                        types: request.body.types,
                        name: request.body.pokemon.name,
                        pokemonID: request.body.pokemon.pokemonID,
                        BTCDay: request.body.info.BTCDay,
                        quotas: request.body.info.quotas,
                        value: request.body.info.value,
                    };
    
                    const createTransaction = await Transaction.create(data);

                    return response.status(200).json(updateWallet);
                }
    
            }catch(error:any){
                return response.status(400).json({
                    error: 'create / update fail',
                    message: error.message
                  })
            }
        }else{
            response.status(401).json({
                error: 'Invalid token'
            })
        }
    }

    async list(request: Request, response: Response){
        
        const token = request.headers.authorization?.replace('Bearer ', '')

        if(token) { 
            try{
                const userDecode = jwtDecode<JwtPayload>(token);
                const userID = userDecode._id;
    
                const userTransaction = await Transaction.find({ user: userID });

                return response.status(200).json(userTransaction);
    
            }catch(error:any){
                return response.status(400).json({
                    error: 'Unexpected error',
                    message: error.message
                  })
            }
        }else{
            response.status(401).json({
                error: 'Invalid token'
            })
        }
    }
};


export default new TransactionController;