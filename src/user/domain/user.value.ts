import { UserEntity } from './user.entity';
import { v4 as uuid } from "uuid";

export class UserValue implements UserEntity{

  name: string;
  email: string;
  uuid: string;
  descripcion: string;

  constructor({ name, email, descripcion }: { name: string, email: string, descripcion?: string }){
    this.uuid = uuid();
    this.email = email;
    this.name = name;
    this.descripcion = descripcion ? descripcion : 'Default'; // default value
  }

}