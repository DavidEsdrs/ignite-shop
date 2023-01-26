import { hash } from "argon2";
import { instanceToPlain } from "class-transformer";
import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { ICreateUserDTO } from "./CreateUserDTO";

export class CreateUserService {
    constructor(
        private usersRepository: IUsersRepository
    ) {}

    async execute({ username, email, password }: ICreateUserDTO) {
        const userEmail = await this.usersRepository.findByEmail(email);

        if(userEmail) {
            throw new Error("The given email already exists!");
        }

        const encryptedPassword = await hash(password);

        const user = this.usersRepository.create({ username, email, password: encryptedPassword });

        await this.usersRepository.save(user);

        return instanceToPlain(user) as User;
    }
}