<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue'
import type { Recipe } from '@/types/Recipe'

const props = defineProps<{ id: string }>()
const recipe = ref<Recipe>({
	id: 0,
	name: '',
	image: '',
	tags: [],
	instructions: [],
	ingredients: [],
})

onMounted(() => {
	getRecipe()
})

async function getRecipe() {
	try {
		const response = await axios.get<Recipe>(`/api/recipes/${props.id}`)
		console.log('response status is:', response.status)
		recipe.value = response.data
	} catch (error) {
		console.error('Error fetching recipe:', error)
		throw error
	}
}
</script>

<template>
	<main>
		<section class="recipe">
			<div class="recipe__head">
				<h1 class="recipe__head__title">{{ recipe.name }}</h1>
				<img :src="`/images/${recipe.image}`" alt="" />
			</div>
			<div class="recipe__body">
				<ul class="recipe__body__ingredients">
					<li
						class="recipe__body__ingredients__ingredient"
						v-for="ingredient in recipe.ingredients"
						:key="ingredient.id"
					>
						{{ ingredient.amount }}
						{{ ingredient.measurement }}
						{{ ingredient.name }}
					</li>
				</ul>
				<ol class="recipe__body__steps">
					<li
						class="recipe__body__steps__step"
						v-for="step in recipe.instructions"
						:key="step"
					>
						{{ step }}
					</li>
				</ol>
			</div>
		</section>
	</main>
</template>

<style>
.recipe {
	display: flex;
	flex-direction: column;
	gap: var(--xxl);
	margin: 0 auto;
	max-width: 1280px;
	padding: var(--m);
}

.recipe__head__title {
	background: linear-gradient(
		to top,
		hsla(97, 97%, 13%, 0) 0%,
		hsla(97, 97%, 13%, 0.8) 10%,
		hsla(97, 97%, 13%, 0.8) 70%,
		hsla(198, 31%, 6%, 0.85) 100%
	);
	border-radius: 20px 20px 0 0;
	color: var(--text-secondary);
	font-weight: bold;
	height: fit-content;
	padding: var(--l) 0;
	position: absolute;
	text-align: center;
	top: 0;
	width: 100%;
}

.recipe__head {
	align-items: center;
	border-radius: 20px;
	display: flex;
	gap: 32px;
	justify-content: center;
	overflow: hidden;
	position: relative;

	img {
		aspect-ratio: 4/3;
		height: 800px;
		object-fit: cover;
		width: 1280px;
		z-index: -1;

		@media only screen and (min-width: 768px) {
			aspect-ratio: 16/9;
		}
	}
}

.recipe__body {
	display: flex;
	margin-bottom: var(--l);
	flex-direction: column;
	padding: 0 var(--l);
	gap: var(--l);

	@media only screen and (min-width: 768px) {
		flex-direction: row;
		margin-bottom: var(--xxl);
	}
}

.recipe__body__ingredients {
	columns: 2;
	margin: 0 auto;
	width: 100%;

	@media only screen and (min-width: 768px) {
		columns: 1;
		width: 33%;
	}

	& li:not(:last-child) {
		margin-bottom: var(--m);
	}

	& li::marker {
		color: var(--green-400);
	}
}

.recipe__body__steps {
	margin: 0 auto;
	width: 100%;

	@media only screen and (min-width: 768px) {
		width: 66%;
	}

	& li:not(:last-child) {
		margin-bottom: var(--m);
	}

	& li::marker {
		color: var(--green-400);
		font-weight: bold;
	}
}
</style>
