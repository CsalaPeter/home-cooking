import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { RecipeIngredient } from "./recipeIngredient.js";

@Entity("ingredient")
export class Ingredient {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ type: "character varying", unique: true })
	name!: string;

	@Column("smallint") // In 100 grams
	calories!: number;

	@Column({ type: "decimal", precision: 4, scale: 1 }) // In 100 grams
	fat!: number;

	@Column({ type: "decimal", precision: 4, scale: 1 }) // In 100 grams
	carbs!: number;

	@Column({ type: "decimal", precision: 4, scale: 1 }) // In 100 grams
	protein!: number;

	@Column({ type: "decimal", precision: 4, scale: 1 }) // In 100 grams
	fiber!: number;

	@OneToMany(
		"RecipeIngredient",
		(recipeIngredients: RecipeIngredient) => recipeIngredients.ingredient,
	)
	recipeIngredients!: RecipeIngredient[];
}
