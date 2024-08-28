import { Request, Response } from 'express';
import { UserUseCase } from '../../application/userUseCase';

export class UserController {
  
  constructor(
    private userUseCase: UserUseCase,
  ){}


  public getController = async (req: Request, res: Response) => {
    const { uuid } = req.query;
    const user = await this.userUseCase.getDetailUser(`${uuid}`);
    res.send(user);
  }

  public insertController = async (req: Request, res: Response) => {
    const { body } = req;
    const user = await this.userUseCase.registerUser(body);
    res.send(user);
  }

}