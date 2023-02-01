import { verify } from "argon2";
import { sign } from "jsonwebtoken";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { ILoginUserDTO } from "./LoginUserDTO";

export class LoginUserService { 
    constructor(
        private usersRepository: IUsersRepository
    ) {}
    
    async execute({ email, password }: ILoginUserDTO) {
        const user = await this.usersRepository.findByEmail(email);
        if(!user) {
            throw new Error("Invalid credentials!");
        }
        const isCorrectPassword = await verify(user.password, password);
        if(!isCorrectPassword) {
            throw new Error("Invalid credentials!");
        }
        const token = sign({ email }, process.env.JWT_TOKEN, {
            expiresIn: "1d",
            subject: user.id
        });
        return token;
    }
}