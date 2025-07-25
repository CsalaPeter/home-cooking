import { Request, Response } from "express";
import { AppDataSource } from "../database/dataSource.js";
import { Recipe } from "../database/entities/recipe.js";

export async function getRecipes(request: Request, response: Response) {
	const allRecipes = await AppDataSource.getRepository(Recipe)
		.createQueryBuilder("recipe")
		.getMany();

	response.status(200).json(allRecipes);
}

export async function getRecipe(request: Request, response: Response) {
	const recipeId = request.params.id;
	const recipe = await AppDataSource.getRepository(Recipe)
		.createQueryBuilder("recipe")
		.where("recipe.id = :id", { id: recipeId })
		.getOne();

	response.status(200).json(recipe);
}

export async function searchRecipe(request: Request, response: Response) {
	const searchWord = request.query.query as string;
	const recipeNames = await AppDataSource.getRepository(Recipe)
		.createQueryBuilder("recipe")
		.select(["recipe.id", "recipe.name"])
		.where("recipe.name ILIKE :searchWord", {
			searchWord: `%${searchWord}%`,
		})
		.getMany();

	response.status(200).json(recipeNames);
}
