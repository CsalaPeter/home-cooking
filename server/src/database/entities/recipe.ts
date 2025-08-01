import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany,
} from "typeorm";
import { RecipeIngredient } from "./recipeIngredient.js";

@Entity("recipe")
export class Recipe {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column("varchar")
	name!: string;

	@Column("varchar")
	image!: string;

	@Column("varchar")
	description!: string;

	@OneToMany(
		"RecipeIngredient",
		(recipeIngredients: RecipeIngredient) => recipeIngredients.recipe,
		{ cascade: true },
	)
	recipeIngredients!: RecipeIngredient[];

	@Column("varchar", { array: true })
	instructions!: string[];

	@CreateDateColumn({ name: "created_at", select: false })
	created_at!: Date;

	@UpdateDateColumn({ name: "updated_at", select: false })
	updated_at!: Date;
}
