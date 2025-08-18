import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRecipeTable1755173642229 implements MigrationInterface {
    name = 'CreateRecipeTable1755173642229'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tag" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_8e4052373c579afc1471f526760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "recipe_tags_tag" ("recipeId" integer NOT NULL, "tagId" integer NOT NULL, CONSTRAINT "PK_ae13f8c3cba4e537ac79e71d39f" PRIMARY KEY ("recipeId", "tagId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ec10fc71f95d0199fa20bc3657" ON "recipe_tags_tag" ("recipeId") `);
        await queryRunner.query(`CREATE INDEX "IDX_ee885d85e317449e0f990504e8" ON "recipe_tags_tag" ("tagId") `);
        await queryRunner.query(`ALTER TABLE "recipe" DROP COLUMN "tags"`);
        await queryRunner.query(`ALTER TABLE "recipe_tags_tag" ADD CONSTRAINT "FK_ec10fc71f95d0199fa20bc3657a" FOREIGN KEY ("recipeId") REFERENCES "recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "recipe_tags_tag" ADD CONSTRAINT "FK_ee885d85e317449e0f990504e8f" FOREIGN KEY ("tagId") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "recipe_tags_tag" DROP CONSTRAINT "FK_ee885d85e317449e0f990504e8f"`);
        await queryRunner.query(`ALTER TABLE "recipe_tags_tag" DROP CONSTRAINT "FK_ec10fc71f95d0199fa20bc3657a"`);
        await queryRunner.query(`ALTER TABLE "recipe" ADD "tags" character varying array NOT NULL`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ee885d85e317449e0f990504e8"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ec10fc71f95d0199fa20bc3657"`);
        await queryRunner.query(`DROP TABLE "recipe_tags_tag"`);
        await queryRunner.query(`DROP TABLE "tag"`);
    }

}
