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
		<div class="recipe-card__tags">
			<span class="recipe-card__tags__tag" v-for="(tag, index) in recipe.tags" :key="index">
				<svg class="recipe-card__tags__tag__icon" viewBox="0 0 24 24" height="18px">
					<use href="../assets/main.svg#mitt" />
				</svg>
				<p class="recipe-card__tags__tag__text">{{ tag }}</p></span
			>
		</div>
		<h4 class="recipe-card__title">{{ recipe.name }}</h4>
	</a>
</template>

<style>
.recipe-card {
	background-color: var(--white);
	border: 2px solid var(--green-200);
	border-radius: var(--m);
	box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	width: calc((100% / 3) - 24px);

	& .recipe-card__img-wrapper {
		display: flex;
		margin-bottom: var(--m);
		height: 200px;
		width: 100%;
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
	top: var(--m);
	left: var(--s);
	display: flex;
	flex-direction: column;
	gap: var(--s);
	position: absolute;
}

.recipe-card__tags__tag {
	align-items: center;
	background-color: var(--green-400);
	border-radius: 20px;
	color: var(--text-secondary);
	display: flex;
	gap: var(--xs);
	height: 34px;
	justify-content: center;
	width: 34px;

	&:hover {
		padding: 0 var(--s);
		width: auto;

		& .recipe-card__tags__tag__text {
			display: block;
		}
	}

	svg {
		color: var(--text-secondary);
	}
}

.recipe-card__tags__tag__text {
	margin: 0;
	display: none;
}
</style>
