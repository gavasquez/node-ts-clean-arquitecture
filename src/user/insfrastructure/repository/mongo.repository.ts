import { UserEntity } from '../../domain/user.entity';
import { UserRepository } from '../../domain/user.repository';
import UserModel from '../model/user.schema';

export class MongoRepository implements UserRepository {

  async findUserById( uuid: string ): Promise<any> {
    console.log(uuid);
    const user = await UserModel.findById(uuid);
    console.log(user)
    return user;
  }

  async registerUser( userEntity: UserEntity ): Promise<any> {
    const user = await UserModel.create({userEntity});
    return user;
  }

  async listUser(): Promise<any> {
    const users = await UserModel.find();
    console.log({users})
    return users;
  }

}