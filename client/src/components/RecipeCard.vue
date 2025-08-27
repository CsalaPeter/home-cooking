<script setup lang="ts">
import type { RecipeShort } from '@/types/Recipe'

// Destructure 'recipe' directly from 'props'
const { recipe } = defineProps<{
	recipe: RecipeShort
}>()
</script>

<template>
	<a class="recipe-card" :href="`/recipe/${recipe.id}`">
		<img class="recipe-card__background" :src="`/images/${recipe.card_image}`" />
		<div class="recipe-card__content">
			<h4 class="recipe-card__content__title">{{ recipe.name }}</h4>
			<div class="recipe-card__content__tags">
				<a class="recipe-card__content__tags__tag" v-for="tag in recipe.tags" :key="tag.id">
					<div class="recipe-card__content__tags__tag__icon">
						<svg>
							<use :href="`/main.svg#${tag.icon}`" />
						</svg>
					</div>
					<p class="recipe-card__content__tags__tag__text">{{ tag.name }}</p></a
				>
			</div>
		</div>
	</a>
</template>

<style>
.recipe-card {
	border-radius: var(--m);
	box-shadow: 8px 8px 4px 6px rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
	height: 500px;
	justify-content: end;
	overflow: hidden;
	position: relative;
	width: 400px;
}

.recipe-card__background {
	height: 100%;
	left: 0;
	object-fit: cover;
	position: absolute;
	top: 0;
	width: 100%;
	z-index: -1;
}

.recipe-card__content {
	display: flex;
	flex-direction: column;
	padding: var(--m);
	background: linear-gradient(
		to bottom,
		hsla(97, 97%, 13%, 0) 0%,
		hsla(97, 97%, 13%, 0.8) 10%,
		hsla(97, 97%, 13%, 0.8) 70%,
		hsla(198, 31%, 6%, 0.85) 100%
	);
}

.recipe-card__content__title {
	color: var(--text-secondary);
	font-size: 24px;
	font-weight: bold;
	width: 100%;
}

.recipe-card__content__tags {
	display: flex;
	flex-wrap: wrap;
	gap: var(--m);
	height: fit-content;
	justify-content: center;
}

.recipe-card__content__tags__tag {
	align-items: center;
	border-radius: 20px;
	color: var(--text-secondary);
	display: flex;
	gap: var(--s);
	height: 34px;

	&:hover {
		text-decoration: underline;
	}
}

.recipe-card__content__tags__tag__icon {
	height: 24px;
	width: 24px;

	svg {
		color: var(--text-secondary);
		height: 24px;
		width: 24px;
	}
}

.recipe-card__content__tags__tag__text {
	margin: 0;
	height: 18px;
}
</style>
