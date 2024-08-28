import { Router } from 'express';
import { MongoRepository } from '../repository/mongo.repository';
import { UserUseCase } from '../../application/userUseCase';
import { UserController } from '../controller/user.controller';


const route = Router();


const mongoRepository = new MongoRepository();

const userUseCase = new UserUseCase( mongoRepository );

const userController = new UserController(userUseCase);

route.post('/users', userController.insertController);

route.get('/users', userController.getController);

export default route;