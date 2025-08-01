import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { RecipeIngredient } from "./recipeIngredient.js";

@Entity("ingredient")
export class Ingredient {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ type: "character varying", unique: true })
	name!: string;

	@OneToMany(
		"RecipeIngredient",
		(recipeIngredients: RecipeIngredient) => recipeIngredients.ingredient,
	)
	recipeIngredients!: RecipeIngredient[];
}
