import { Router } from 'express';
import PokemonController from './Controllers/PokemonController';
import UserController from './Controllers/UserController';
import AuthController from './Controllers/AuthController';
import CurrencyController from './Controllers/CurrencyController';


const routes = Router();

// Auth Routes
routes.post('/auth', AuthController.authenticate);

// Pokemon Routes
routes.get('/pokemon', PokemonController.list);

// Bitcoin Routes
routes.get('/currency', CurrencyController.list);

// Users Routes
routes.post('/users', UserController.create);
routes.get('/users', UserController.list);


export default routes;