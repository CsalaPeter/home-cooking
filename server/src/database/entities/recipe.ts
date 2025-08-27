import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany,
	ManyToMany,
	JoinTable,
} from "typeorm";
import { RecipeIngredient } from "./recipeIngredient.js";
import { Tag } from "./tags.js";

@Entity("recipe")
export class Recipe {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column("varchar")
	name!: string;

	@Column("varchar")
	card_image!: string;

	@Column("varchar")
	image!: string;

	@ManyToMany(() => Tag)
	@JoinTable()
	tags!: Tag[];

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
