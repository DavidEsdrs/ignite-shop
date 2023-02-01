import { usersRepository } from "../../../repositories/implementations/typeorm/UsersRepository"
import { LoginUserController } from "./LoginUserController";
import { LoginUserService } from "./LoginUserService"

export const buildLoginService = () => {
    const service = new LoginUserService(usersRepository);
    const controller = new LoginUserController(service);
    return controller;
}