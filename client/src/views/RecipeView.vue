<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue'
import type { Recipe } from '@/types/Recipe'

const props = defineProps<{ id: string }>()
const recipe = ref<Recipe>({
	id: 0,
	name: '',
	image: '',
	description: '',
	ingredients: [],
	instructions: [],
})

onMounted(() => {
	getRecipe()
})

async function getRecipe() {
	try {
		const response = await axios.get<Recipe>(`http://localhost:3000/api/recipes/${props.id}`)
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
				<img :src="`http://localhost:5173/src/assets/images/${recipe.image}`" alt="" />
				<h4>{{ recipe.description }}</h4>
			</div>
			<div class="recipe__body">
				<ul>
					<li v-for="ingredient in recipe.ingredients" :key="ingredient">
						{{ ingredient }}
					</li>
				</ul>
				<ol>
					<li v-for="step in recipe.instructions" :key="step">
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
	gap: 32px;
}

.recipe__title {
	font-weight: bold;
	text-align: center;
}

.recipe__head {
	align-items: center;
	display: flex;
	gap: 32px;

	img {
		width: 30%;
		border-radius: 20px;
	}

	h4 {
		text-align: center;
		width: 70%;
	}
}

.recipe__body {
	display: flex;
	place-items: center;

	ul {
		width: 30%;
	}

	ol {
		width: 70%;
	}
}
</style>
