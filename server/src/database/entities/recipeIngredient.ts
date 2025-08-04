import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	JoinColumn,
} from "typeorm";
import { Recipe } from "./recipe.js";
import { Ingredient } from "./ingredient.js";
import { Measurement } from "./measurement.js";

@Entity("recipeIngredient")
export class RecipeIngredient {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column("smallint")
	amount!: number;

	@ManyToOne("Recipe", (recipe: Recipe) => recipe.recipeIngredients, {
		onDelete: "CASCADE",
	})
	@JoinColumn({ name: "recipe_id" })
	recipe!: Recipe;

	@ManyToOne(
		"Measurement",
		(measurement: Measurement) => measurement.recipeIngredients,
	)
	@JoinColumn({ name: "measurement_id" })
	measurement!: Measurement;

	@ManyToOne(
		"Ingredient",
		(ingredient: Ingredient) => ingredient.recipeIngredients,
	)
	@JoinColumn({ name: "ingredient_id" })
	ingredient!: Ingredient;
}
