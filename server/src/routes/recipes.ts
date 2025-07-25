import { Router } from "express";
import { searchRecipe, getRecipe, getRecipes } from "../handlers/recipes.js";

const recipeRoutes = Router();

recipeRoutes.get("/search", searchRecipe);
recipeRoutes.get("/:id", getRecipe);
recipeRoutes.get("/", getRecipes);

export default recipeRoutes;
