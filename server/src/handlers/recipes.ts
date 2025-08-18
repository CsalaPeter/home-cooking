import { Request, Response } from "express";
import { AppDataSource } from "../database/dataSource.js";
import { Recipe } from "../database/entities/recipe.js";
import { RecipeIngredient } from "src/database/entities/recipeIngredient.js";

export async function getRecipes(request: Request, response: Response) {
	try {
		const allRecipes = await AppDataSource.getRepository(Recipe)
			.createQueryBuilder("recipe")
			.leftJoinAndSelect("recipe.tags", "tag")
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

		const recipe = await AppDataSource.getRepository(Recipe)
			.createQueryBuilder("recipe")
			.leftJoinAndSelect("recipe.recipeIngredients", "recipeIngredient")
			.leftJoinAndSelect("recipeIngredient.ingredient", "ingredient")
			.leftJoinAndSelect("recipeIngredient.measurement", "measurement")
			.where("recipe.id = :id", { id: recipeId })
			.getOne();

		if (!recipe) {
			return response.status(404).json({ message: "Recipe not found." });
		}

		const totalCalories = recipe.recipeIngredients.reduce(
			(sum, recipeIngredient) => {
				const ingredientCalories = recipeIngredient.ingredient.calories;
				const ingredientQuantity =
					recipeIngredient.measurement.value != 0
						? recipeIngredient.amount *
							recipeIngredient.measurement.value
						: recipeIngredient.amount;
				return sum + ingredientCalories * (ingredientQuantity / 100);
			},
			0,
		);

		const formattedRecipe = {
			id: recipe.id,
			name: recipe.name,
			image: recipe.image,
			description: recipe.description,
			instructions: recipe.instructions,
			ingredients: recipe.recipeIngredients.map(
				(ingredient: RecipeIngredient) => ({
					id: ingredient.id,
					amount: ingredient.amount,
					name: ingredient.ingredient.name,
					measurement: ingredient.measurement.unit,
				}),
			),
			calories: totalCalories,
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
