<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'
import type { Recipe } from '@/types/Recipe'
import RecipeCard from '@/components/RecipeCard.vue'

const recipes = ref<Recipe[]>([])

onMounted(() => {
	getRecipes()
})

async function getRecipes() {
	try {
		const response = await axios.get<Recipe[]>('http://localhost:3000/api/recipes', {})
		console.log('response status is: ', response.status)
		recipes.value = response.data
	} catch (error) {
		console.error('Error fetching recipes:', error)
		throw error
	}
}
</script>

<template>
	<main>
		<h1>Welcome to Home Cooking</h1>
		<section>
			<div class="recipeCards">
				<RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
			</div>
		</section>
	</main>
</template>

<style>
.recipeCards {
	display: flex;
	gap: 16px;
}
</style>
