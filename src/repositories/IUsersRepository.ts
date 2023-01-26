import { User } from "../entities/User";

export interface IUsersRepository {
    findByEmail(email: string): Promise<User>;
    create(args: Partial<User>): User;
    save(user: User): Promise<void>;
}