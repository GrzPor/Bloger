<template lang="pug">
	.py-4
		.flex.justify-between.items-center.mb-12
			h1.text-4xl Create new post
			router-link(
				:to="{ name: 'posts' }"
				class="p-2 rounded-lg text-white bg-yellow-500 hover:bg-yellow-700 transition-colors duration-500 uppercase font-bold"
			) Back to all posts  
		div(
			class="grid grid-cols-2 gap-4"
		)
			label.block
				span.text-gray-700 Tytuł
				input(
					type="text"
					v-model="title"
					name="title"
					class="mt-1 block w-full runded-md border-gray-300 shadow-sm focus:border-indigo-300"
				)
			label.block
				span.text-gray-700 Opis
				input(
					type="text"
					v-model="description"
					name="description"
					class="mt-1 block w-full runded-md border-gray-300 shadow-sm focus:border-indigo-300"
				)
			label.block
				span.text-gray-700 Tagi
				input(
					type="text"
					v-model="tags"
					name="tags"
					class="mt-1 block w-full runded-md border-gray-300 shadow-sm focus:border-indigo-300"
				)
			label.block
				span.text-gray-700 Kategorie
				input(
					type="text"
					v-model="categories"
					name="categories"
					class="mt-1 block w-full runded-md border-gray-300 shadow-sm focus:border-indigo-300"
				)
			.flex.justify-end.col-span-2
				button(
					@click="createPost"
					class="p-2 rounded-lg text-white bg-purple-700 hover:bg-purple-900 transition-colors duration-500 uppercase font-bold"
				) Submit
</template>

<script>
import axios from 'axios';

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
			axios.post('http://localhost:8080/posts', {
				"title": this.title,
				"descripton": this.description,
				"tags": this.tags,
				"categories": this.categories
			})
			.then((res) => {
				console.log('qwe0');
				console.log(res);
			})
			.catch((err) => {
				console.log('qwe1');
				console.log(`post request error: ${err}`)
			})
			.finally(() => {
				console.log('qwe2')
				console.log(this.$router);
				this.$router.push({ name: "posts" })
			});
		}
	}
}
</script>

<style>

</style>
