import { UserRepository } from '../domain/user.repository';
import { UserValue } from '../domain/user.value';

export class UserUseCase {

  constructor(
    private readonly userRepository: UserRepository,
  ){}


  public registerUser = async ({ name, email, descripcion }: { name: string, email: string, descripcion: string }) => {
    const userValue = new UserValue({ name, email, descripcion });
    const userCreated = await this.userRepository.registerUser(userValue);
    return userCreated;
  }

  public getDetailUser = async (uuid: string) => {
    return  this.userRepository.findUserById(uuid);
  }

}