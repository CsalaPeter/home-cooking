import { Request, Response } from "express";
import { AppDataSource } from "../database/dataSource.js";
import { Recipe } from "../database/entities/recipe.js";
import { RecipeIngredient } from "src/database/entities/recipeIngredient.js";
import { error } from "console";

export async function getRecipes(request: Request, response: Response) {
	try {
		const allRecipes = await AppDataSource.getRepository(Recipe)
			.createQueryBuilder("recipe")
			.getMany();

		response.status(200).json(allRecipes);
	} catch (error) {
		console.error("Error fetching recipes:", error);
		response.status(500).json({ message: "Internal server error" });
	}
}

export async function getRecipe(request: Request, response: Response) {
	try {
		const recipeId = request.params.id;

		const getRecipe = await AppDataSource.getRepository(Recipe)
			.createQueryBuilder("recipe")
			.leftJoinAndSelect("recipe.recipeIngredients", "recipeIngredient")
			.leftJoinAndSelect("recipeIngredient.ingredient", "ingredient")
			.leftJoinAndSelect("recipeIngredient.measurement", "measurement")
			.where("recipe.id = :id", { id: recipeId })
			.getOne();

		if (!getRecipe) {
			return response.status(404).json({ message: "Recipe not found." });
		}

		const ingredients = getRecipe.recipeIngredients;
		const formattedRecipe = {
			id: getRecipe.id,
			name: getRecipe.name,
			image: getRecipe.image,
			description: getRecipe.description,
			instructions: getRecipe.instructions,
			ingredients: ingredients.map((ingredient: RecipeIngredient) => ({
				id: ingredient.id,
				amount: ingredient.amount,
				name: ingredient.ingredient.name,
				measurement: ingredient.measurement.unit,
			})),
		};
		response.status(200).json(formattedRecipe);
	} catch (error) {
		console.error("Error fetching recipe:", error);
		response.status(500).json({ message: "Internal server error" });
	}
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
