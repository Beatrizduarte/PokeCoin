import { Router } from 'express';
import PokemonController from './Controllers/PokemonController';
import UserController from './Controllers/UserController';
import AuthController from './Controllers/AuthController'


const routes = Router();

// Auth Routes
routes.post('/auth', AuthController.authenticate);

// Pokemon Routes
routes.get('/pokemon', PokemonController.list);

// Users Routes
routes.post('/users', UserController.create);
routes.get('/users', UserController.list);
routes.put('/users', UserController.update);


export default routes;