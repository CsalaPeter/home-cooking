<script setup lang="ts">
import type { Recipe } from '@/types/Recipe'

// Destructure 'recipe' directly from 'props'
const { recipe } = defineProps<{
	recipe: Recipe
}>()
const imgUrl = new URL(`../assets/images/${recipe.image}`, import.meta.url).href
</script>

<template>
	<div class="recipeCard">
		<h2>{{ recipe.name }}</h2>
		<div class="imgContainer">
			<img :src="imgUrl" />
		</div>
		<p>{{ recipe.instructions }}</p>
	</div>
</template>

<style>
.recipeCard {
	display: flex;
	flex-direction: column;
	box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);
	border-radius: 16px;
	padding: 16px;
	gap: 24px;
	justify-content: space-between;
	width: calc(100% / 3);

	& .imgContainer {
		display: flex;
		height: 200px;
		max-width: 100%;
	}

	& img {
		object-fit: cover;
		width: 100%;
	}
}
</style>
