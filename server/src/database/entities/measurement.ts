import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { RecipeIngredient } from "./recipeIngredient.js";

@Entity("measurement")
export class Measurement {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ type: "character varying", unique: true })
	unit!: string;

	@Column({ type: "smallint", nullable: true })
	value!: number;

	@OneToMany(
		"RecipeIngredient",
		(recipeIngredients: RecipeIngredient) => recipeIngredients.measurement,
	)
	recipeIngredients!: RecipeIngredient[];
}
