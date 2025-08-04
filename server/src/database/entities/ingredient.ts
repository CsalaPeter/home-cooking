import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { RecipeIngredient } from "./recipeIngredient.js";

@Entity("ingredient")
export class Ingredient {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ type: "character varying", unique: true })
	name!: string;

	@Column("smallint")
	calories!: number;

	@Column("smallint")
	fat!: number;

	@Column("smallint")
	carbs!: number;

	@Column("smallint")
	protein!: number;

	@Column("smallint")
	fiber!: number;

	@OneToMany(
		"RecipeIngredient",
		(recipeIngredients: RecipeIngredient) => recipeIngredients.ingredient,
	)
	recipeIngredients!: RecipeIngredient[];
}
