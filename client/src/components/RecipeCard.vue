<script setup lang="ts">
import type { Recipe } from '@/types/Recipe'

// Destructure 'recipe' directly from 'props'
const { recipe } = defineProps<{
	recipe: Recipe
}>()
</script>

<template>
	<a class="recipe-card" :href="`/recipe/${recipe.id}`">
		<h4 class="recipe-card__title">{{ recipe.name }}</h4>
		<div class="recipe-card__img-wrapper">
			<img :src="`/images/${recipe.image}`" />
		</div>
		<div class="recipe-card__tags">
			<a class="recipe-card__tags__tag" v-for="(tag, index) in recipe.tags" :key="index">
				<svg class="recipe-card__tags__tag__icon" viewBox="0 0 24 24" height="18px">
					<use href="../assets/main.svg#mitt" />
				</svg>
				<p class="recipe-card__tags__tag__text">{{ tag }}</p></a
			>
		</div>
	</a>
</template>

<style>
.recipe-card {
	background-color: var(--green-100);
	border: 2px solid var(--green-300);
	border-radius: var(--m);
	box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: var(--m);
	width: calc((100% / 2) - 52px);

	& .recipe-card__img-wrapper {
		border-radius: var(--m);
		display: flex;
		height: 400px;
		overflow: hidden;
		width: 100%;
		margin-bottom: var(--l);
	}

	& img {
		object-fit: cover;
		width: 100%;
	}
}

.recipe-card__title {
	font-size: 24px;
	font-weight: bold;
	width: 100%;
}

.recipe-card__tags {
	display: flex;
	flex-wrap: wrap;
	gap: var(--s);
	height: fit-content;
	justify-content: center;
}

.recipe-card__tags__tag {
	align-items: center;
	background-color: var(--green-400);
	border-radius: 20px;
	color: var(--text-secondary);
	display: flex;
	gap: var(--xs);
	height: 34px;
	padding: 0 var(--m);

	svg {
		color: var(--text-secondary);
	}
}

.recipe-card__tags__tag__text {
	margin: 0;
}
</style>
