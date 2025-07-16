import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
} from "typeorm";

@Entity("recipe")
export class Recipe {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	name!: string;

	@Column()
	ingredients!: string;

	@Column()
	instructions!: string;

	@CreateDateColumn({ name: "created_at" })
	created_at!: Date;

	@CreateDateColumn({ name: "updated_at" })
	updated_at!: Date;
}
