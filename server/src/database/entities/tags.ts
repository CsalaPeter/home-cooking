import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Recipe } from "./recipe.js";

@Entity()
export class Tag {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	name!: string;

	@Column()
	icon!: string;
}
