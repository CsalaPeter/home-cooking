<script setup lang="ts">
import type { Recipe } from '@/types/Recipe'

// Destructure 'recipe' directly from 'props'
const { recipe } = defineProps<{
	recipe: Recipe
}>()
</script>

<template>
	<a class="recipe-card" :href="`/recipe/${recipe.id}`">
		<div class="recipe-card__img-wrapper">
			<img :src="`/images/${recipe.image}`" />
		</div>
		<h3 class="recipe-card__title">{{ recipe.name }}</h3>
		<p class="recipe-card__description">{{ recipe.description }}</p>
	</a>
</template>

<style>
.recipe-card {
	align-items: center;
	border-radius: 16px;
	box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
	gap: 24px;
	justify-content: space-between;
	overflow: hidden;
	padding: 16px;
	width: calc(100% / 3);

	& .recipe-card__img-wrapper {
		display: flex;
		height: 200px;
		margin-top: -32px;
		width: calc(100% + 32px);
	}

	& img {
		object-fit: cover;
		width: 100%;
	}
}

.recipe-card__title {
	font-weight: bold;
	text-align: center;
	width: 100%;
}
</style>
