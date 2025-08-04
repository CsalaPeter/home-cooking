import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRecipeTable1754309675393 implements MigrationInterface {
    name = 'CreateRecipeTable1754309675393'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "recipe" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "image" character varying NOT NULL, "tags" character varying array NOT NULL, "description" character varying NOT NULL, "instructions" character varying array NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e365a2fedf57238d970e07825ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ingredient" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "calories" smallint NOT NULL, "fat" smallint NOT NULL, "carbs" smallint NOT NULL, "protein" smallint NOT NULL, "fiber" smallint NOT NULL, CONSTRAINT "UQ_b6802ac7fbd37aa71d856a95d8f" UNIQUE ("name"), CONSTRAINT "PK_6f1e945604a0b59f56a57570e98" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "measurement" ("id" SERIAL NOT NULL, "unit" character varying NOT NULL, "value" smallint, CONSTRAINT "UQ_63d975b1ebd36c7b8cd5e625941" UNIQUE ("unit"), CONSTRAINT "PK_742ff3cc0dcbbd34533a9071dfd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "recipeIngredient" ("id" SERIAL NOT NULL, "amount" smallint NOT NULL, "recipe_id" integer, "measurement_id" integer, "ingredient_id" integer, CONSTRAINT "PK_2249df92bb650fad022399b0e8e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "recipeIngredient" ADD CONSTRAINT "FK_b008e1fa8a31acccd5a93885db3" FOREIGN KEY ("recipe_id") REFERENCES "recipe"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "recipeIngredient" ADD CONSTRAINT "FK_a0e24fac6e2b04d1be5794ab867" FOREIGN KEY ("measurement_id") REFERENCES "measurement"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "recipeIngredient" ADD CONSTRAINT "FK_d143ce7ee50f06ff30876230023" FOREIGN KEY ("ingredient_id") REFERENCES "ingredient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recipeIngredient" DROP CONSTRAINT "FK_d143ce7ee50f06ff30876230023"`);
        await queryRunner.query(`ALTER TABLE "recipeIngredient" DROP CONSTRAINT "FK_a0e24fac6e2b04d1be5794ab867"`);
        await queryRunner.query(`ALTER TABLE "recipeIngredient" DROP CONSTRAINT "FK_b008e1fa8a31acccd5a93885db3"`);
        await queryRunner.query(`DROP TABLE "recipeIngredient"`);
        await queryRunner.query(`DROP TABLE "measurement"`);
        await queryRunner.query(`DROP TABLE "ingredient"`);
        await queryRunner.query(`DROP TABLE "recipe"`);
    }

}
