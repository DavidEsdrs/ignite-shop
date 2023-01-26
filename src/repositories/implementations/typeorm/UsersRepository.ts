import AppDataSource from "../../../../ormconfig";
import { User } from "../../../entities/User";

export const usersRepository = AppDataSource.getRepository(User).extend({
    async findByEmail(email: string) {
        const user = await this.findOneBy({ email });
        return user;
    }
});