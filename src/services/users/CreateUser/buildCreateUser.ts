import { usersRepository } from "../../../repositories/implementations/typeorm/UsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserService } from "./CreateUserService"

export const buildCreateUser = () => {
    const service = new CreateUserService(usersRepository);
    const controller = new CreateUserController(service);
    return controller;
}