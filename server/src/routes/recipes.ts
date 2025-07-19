import { Router } from "express";
import { getRecipes, getRecipe } from "../handlers/recipes.js";

const recipeRoutes = Router();

recipeRoutes.get("/", getRecipes);
recipeRoutes.get("/:id", getRecipe);

export default recipeRoutes;
