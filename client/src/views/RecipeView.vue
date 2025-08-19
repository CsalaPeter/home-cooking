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
			<h1 class="recipe__title">{{ recipe.name }}</h1>
			<div class="recipe__head">
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
	gap: var(--l);
}

.recipe__title {
	font-weight: bold;
	text-align: center;
}

.recipe__head {
	align-items: center;
	display: flex;
	gap: 32px;
	justify-content: center;

	img {
		border-radius: 20px;
		max-height: 800px;
	}
}

.recipe__body {
	display: flex;
	place-items: center;
	margin-bottom: var(--xxl);
}

.recipe__body__ingredients {
	width: 400px;

	& li:not(:last-child) {
		margin-bottom: var(--m);
	}

	& li::marker {
		color: var(--green-400);
	}
}

.recipe__body__steps {
	width: 600px;

	& li:not(:last-child) {
		margin-bottom: var(--m);
	}

	& li::marker {
		color: var(--green-400);
		font-weight: bold;
	}
}
</style>
