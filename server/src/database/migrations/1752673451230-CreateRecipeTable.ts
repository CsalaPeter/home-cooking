import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRecipeTable1752673451230 implements MigrationInterface {
	name = "CreateRecipeTable1752673451230";

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE "recipe" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "ingredients" character varying NOT NULL, "instructions" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e365a2fedf57238d970e07825ca" PRIMARY KEY ("id"))`,
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DROP TABLE "recipe"`);
	}
}
