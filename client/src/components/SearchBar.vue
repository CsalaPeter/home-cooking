<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const searchQuery = ref('')
const searchResults = ref([])

async function searchRecipes() {
	try {
		const response = await axios.get(`http://localhost:3000/api/recipes/search`, {
			params: {
				query: searchQuery.value,
			},
		})
		searchResults.value = response.data
		console.log(searchResults.value)
	} catch (error) {
		console.error(error)
	}
}
</script>

<template>
	<div class="search-bar">
		<input
			type="text"
			class="search-bar__input"
			placeholder="Search for recipe name..."
			v-model="searchQuery"
			@keyup.enter="searchRecipes()"
		/>
	</div>
</template>

<style>
.search-bar {
	display: flex;
	justify-content: center;
	margin: 0 auto 32px;
	max-width: 600px;
	position: relative;
}

.search-bar__input {
	border-radius: 20px;
	border: 2px solid darkblue;
	height: 36px;
	width: 100%;
	padding: 0 10px;

	&:focus {
		outline: none;
		border: 2px solid royalblue;
	}
}
</style>
