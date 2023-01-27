import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config({
    path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env.production"
});

const AppDataSource = new DataSource({
    type: "sqlite",
    database: process.env.TYPEORM_DATABASE,
    entities: [
        process.env.TYPEORM_ENTITIES
    ],
    migrations: [
        process.env.TYPEORM_MIGRATIONS
    ],
    migrationsRun: true
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    });

export default AppDataSource;