<template lang="pug">
	.py-8
		BaseNavigation(title="Create a new Post")
		.grid.grid-cols-2.gap-4
			BaseInput(title="Tytul" v-model="title")
			BaseInput(title="Opis" v-model="description")
			BaseInput(title="Tagi" v-model="tags")
			BaseInput(title="Kategories" v-model="categories")
			.flex.justify-end.col-span-2.mt-4
				button(
					@click="createPost"
					class="p-2 rounded-sm text-sm text-white font-semibold uppercase bg-green-500 hover:bg-green-700 transition-colors duration-500"
				) Submit
</template>

<script>
import { createPost } from '../services/axios'

export default {
	data() {
		return {
			title: null,
			description: null,
			tags: null,
			categories: null,
		}
	},
	methods: {
		createPost() {
			const obj = {
				"title": this.title,
				"descripton": this.description,
				"tags": this.tags,
				"categories": this.categories
			}
			createPost(obj)
				.then(() => this.$router.push({ name: "posts" }))
				.catch((err) => {
					console.log(`Post request error: ${err.message}`)
				})
		}
	}
}
</script>
