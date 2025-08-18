import "reflect-metadata";
import { DataSource } from "typeorm";
import { Recipe } from "./entities/recipe.js";
import { Ingredient } from "./entities/ingredient.js";
import { Measurement } from "./entities/measurement.js";
import { RecipeIngredient } from "./entities/recipeIngredient.js";
import { Tag } from "./entities/tags.js";

export const AppDataSource = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "postgres",
	password: "postgres",
	database: "postgres",
	synchronize: false,
	logging: true,
	entities: [Recipe, Ingredient, Measurement, RecipeIngredient, Tag],
	migrations: ["./src/database/migrations/*.js"],
});
