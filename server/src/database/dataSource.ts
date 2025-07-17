import { DataSource } from "typeorm";
import { Recipe } from "./entities/recipe.js";

export const AppDataSource = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "postgres",
	password: "postgres",
	database: "postgres",
	synchronize: false,
	logging: true,
	entities: [Recipe],
	migrations: ["./src/database/migrations/*.ts"],
});
