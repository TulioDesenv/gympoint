import { Router } from 'express';

// import UserController from './app/controllers/UserController';
import StudentController from './app/controllers/StudentController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();
// Router Session
routes.post('/sessions', SessionController.store);

// Rotas Users
// routes.post('/users', UserController.store);

routes.use(authMiddleware);
// Rotas Students
routes.post('/students', StudentController.store);
routes.put('/students', StudentController.update);

export default routes;
