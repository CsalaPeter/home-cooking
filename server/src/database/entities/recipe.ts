import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
} from "typeorm";

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

	@Column("varchar", { array: true })
	ingredients!: string[];

	@Column("varchar", { array: true })
	instructions!: string[];

	@CreateDateColumn({ name: "created_at", select: false })
	created_at!: Date;

	@UpdateDateColumn({ name: "updated_at", select: false })
	updated_at!: Date;
}
