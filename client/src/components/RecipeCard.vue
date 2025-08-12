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
		<div class="recipe-card__content">
			<h4 class="recipe-card__content__title">{{ recipe.name }}</h4>
			<div class="recipe-card__content__tags">
				<span
					class="recipe-card__content__tags__tag"
					v-for="(tag, index) in recipe.tags"
					:key="index"
					>{{ tag }}</span
				>
			</div>
		</div>
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
	overflow: hidden;
	width: calc((100% / 3) - 24px);

	& .recipe-card__img-wrapper {
		display: flex;
		height: 200px;
		margin-block: -32px var(--l);
		width: calc(100% + 32px);
	}

	& img {
		object-fit: cover;
		width: 100%;
	}
}

.recipe-card__content {
	padding: var(--m);
}

.recipe-card__content__title {
	font-size: 24px;
	font-weight: bold;
	text-align: left;
	width: 100%;
}

.recipe-card__content__tags {
	display: flex;
	flex-wrap: wrap;
	gap: var(--s);
}

.recipe-card__content__tags__tag {
	background-color: var(--green-400);
	border-radius: 20px;
	color: var(--text-secondary);
	display: flex;
	padding: 6px var(--s) 4px;
}
</style>
