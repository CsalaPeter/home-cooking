import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRecipes1752744989722 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
			INSERT INTO "recipe" ("name", "image", "ingredients", "instructions", "created_at", "updated_at") VALUES
			('Spaghetti Carbonara', 'spaghetti_carbonara.jpg', ARRAY['spaghetti', 'eggs', 'pecorino romano', 'guanciale', 'black pepper'], 'Cook spaghetti. Fry guanciale. Mix eggs, cheese, pepper. Combine.', NOW(), NOW()),
			('Tomato Soup', 'tomato_soup.jpg', ARRAY['tomatoes', 'onion', 'garlic', 'vegetable broth', 'basil'], 'Saute onion and garlic. Add tomatoes and broth. Simmer. Blend. Garnish with basil.', NOW(), NOW()),
			('Chicken Stir-fry', 'chicken_stir_fry.jpg', ARRAY['chicken breast', 'broccoli', 'carrots', 'soy sauce', 'ginger', 'garlic', 'rice'], 'Chop chicken and veggies. Stir-fry. Add sauce. Serve with rice.', NOW(), NOW());
			`);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
			DELETE FROM "recipe"
			WHERE "name" IN ('Spaghetti Carbonara', 'Tomato Soup', 'Chicken Stir-fry');
			`);
	}
}
