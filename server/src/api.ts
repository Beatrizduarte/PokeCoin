import axios from 'axios';
import 'dotenv/config';

export const pokemonApi = axios.create({
    baseURL: process.env.POKEMON_HOST
});