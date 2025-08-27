<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'
import type { RecipeShort } from '@/types/Recipe'
import RecipeCard from '@/components/RecipeCard.vue'

const recipes = ref<RecipeShort[]>([])

onMounted(() => {
	getRecipes()
})

async function getRecipes() {
	try {
		const response = await axios.get<RecipeShort[]>('/api/recipes', {})
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
		<section class="recipes">
			<div class="recipe-cards">
				<RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
			</div>
		</section>
	</main>
</template>

<style>
.recipes {
	width: 100%;
}
.recipe-cards {
	display: flex;
	flex-wrap: wrap;
	gap: var(--l);
	justify-content: center;
	margin-bottom: var(--xxl);
	width: 100%;
}
</style>
