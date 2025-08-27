<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const searchQuery = ref('')
const searchResults = ref([])

async function searchRecipes() {
	try {
		const response = await axios.get(`/api/recipes/search`, {
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
	<nav class="navbar">
		<a class="navbar__logo" href="/"> Home Cooking </a>
		<div class="navbar__search">
			<input
				type="text"
				class="navbar__search__input"
				placeholder="Search for recipe name..."
				v-model="searchQuery"
				@keyup.enter="searchRecipes()"
			/>
		</div>
	</nav>
</template>

<style>
.navbar {
	background-color: var(--green-300);
	display: flex;
	justify-content: space-between;
	margin-bottom: var(--xxl);
	padding: var(--m);
}

.navbar__logo {
	color: var(--text-secondary);
	font-size: 32px;

	&:hover {
		cursor: pointer;
	}
}

.navbar__search {
	display: flex;
	margin: 0 auto;
	max-width: 600px;
	width: 100%;
}

.navbar__search__input {
	background-color: var(--white);
	border-radius: 20px;
	border: 3px solid var(--green-400);
	height: 36px;
	padding: 0 10px;
	width: 100%;

	&:focus {
		outline: none;
		border: 3px solid var(--green-100);
	}
}
</style>
