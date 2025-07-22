import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertRecipes1753186632045 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
			INSERT INTO "recipe" ("name", "image", "description", "ingredients", "instructions", "created_at", "updated_at") VALUES
			('Spaghetti Carbonara', 'spaghetti_carbonara.jpg', 'A classic Italian pasta dish with eggs, hard cheese, cured pork, and black pepper.', ARRAY['200g spaghetti', '100g pancetta or guanciale', '2 large eggs', '50g Pecorino Romano cheese, grated', 'Freshly ground black pepper', 'Salt to taste'], '1. Cook spaghetti according to package directions.
			2. While spaghetti cooks, cut pancetta into small cubes and cook in a pan over medium heat until crispy. Remove pancetta and set aside, leaving the rendered fat in the pan.
			3. In a bowl, whisk eggs, grated Pecorino Romano, and a generous amount of black pepper.
			4. Drain spaghetti, reserving some pasta water. Add spaghetti to the pan with the rendered fat.
			5. Quickly add the egg mixture to the spaghetti, tossing continuously to coat the pasta. Add a splash of reserved pasta water if needed to create a creamy sauce.
			6. Stir in the cooked pancetta.
			7. Serve immediately with extra Pecorino Romano and black pepper.', NOW(), NOW()),

			('Tomato Soup', 'tomato_soup.jpg', 'A comforting and classic soup made with ripe tomatoes.', ARRAY['1 kg ripe tomatoes', '1 onion, chopped', '2 cloves garlic, minced', '4 cups vegetable or chicken broth', '1/2 cup heavy cream (optional)', '2 tbsp olive oil', 'Salt and pepper to taste', 'Fresh basil for garnish'], '1. Heat olive oil in a large pot over medium heat. Add chopped onion and cook until softened, about 5 minutes.
			2. Add minced garlic and cook for another minute until fragrant.
			3. Add chopped tomatoes and broth to the pot. Bring to a boil, then reduce heat and simmer for 20-25 minutes, or until tomatoes are very soft.
			4. Remove from heat and carefully blend the soup until smooth using an immersion blender or by transferring to a regular blender (in batches if necessary).
			5. Strain the soup through a fine-mesh sieve for an extra smooth consistency (optional).
			6. Return soup to the pot. Stir in heavy cream if using. Season with salt and pepper to taste.
			7. Reheat gently and serve hot, garnished with fresh basil.', NOW(), NOW()),

			('Chicken Stir-fry', 'chicken_stir_fry.jpg', 'A quick and healthy stir-fry with chicken and mixed vegetables.', ARRAY['400g chicken breast, sliced', '2 tbsp soy sauce', '1 tbsp cornstarch', '1 tbsp sesame oil', '1 red bell pepper, sliced', '1 head broccoli, cut into florets', '2 carrots, julienned', '3 cloves garlic, minced', '1 inch ginger, grated', '2 tbsp vegetable oil', 'Cooked rice for serving'], '1. In a bowl, toss sliced chicken with 1 tbsp soy sauce and cornstarch. Set aside for 10 minutes.
			2. Prepare the sauce: In a small bowl, whisk together remaining 1 tbsp soy sauce, sesame oil, and a splash of water.
			3. Heat vegetable oil in a large wok or skillet over high heat. Add chicken and stir-fry until cooked through and lightly browned, about 3-5 minutes. Remove chicken and set aside.
			4. Add bell pepper, broccoli, and carrots to the wok. Stir-fry for 3-4 minutes until vegetables are tender-crisp.
			5. Add minced garlic and grated ginger to the wok and stir-fry for 1 minute until fragrant.
			6. Return chicken to the wok. Pour in the sauce and toss everything to coat. Cook for 1-2 minutes until sauce thickens slightly.
			7. Serve immediately over cooked rice.', NOW(), NOW());
		`);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
			DELETE FROM "recipe"
			WHERE "name" IN ('Spaghetti Carbonara', 'Tomato Soup', 'Chicken Stir-fry');
		`);
	}
}
