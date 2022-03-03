<template lang="pug">
	.py-8
		.flex.justify-between.items-center.mb-12
			h1.text-4xl.font-bold Create new post
			router-link(
				:to="{ name: 'posts' }"
				class="p-2 rounded-sm text-sm text-white font-semibold uppercase bg-green-500 hover:bg-green-700 transition-colors duration-500"
			) Back to all posts
		div(
			class="grid grid-cols-2 gap-4"
		)
			label.block
				span.text-xs.text-black.font-medium.uppercase Tytuł
				input(
					type="text"
					v-model="title"
					name="title"
					class="mt-1 block w-full rounded-sm border-black shadow-md focus:border-green-500"
				)
			label.block
				span.text-xs.text-black.font-medium.uppercase Opis
				input(
					type="text"
					v-model="description"
					name="description"
					class="mt-1 block w-full rounded-sm border-black shadow-md focus:border-green-500"
				)
			label.block
				span.text-xs.text-black.font-medium.uppercase Tagi
				input(
					type="text"
					v-model="tags"
					name="tags"
					class="mt-1 block w-full rounded-sm border-black shadow-md focus:border-green-500"
				)
			label.block
				span.text-xs.text-black.font-medium.uppercase Kategorie
				input(
					type="text"
					v-model="categories"
					name="categories"
					class="mt-1 block w-full rounded-sm border-black shadow-md focus:border-green-500"
				)
			.flex.justify-end.col-span-2.mt-4
				button(
					@click="createPost"
					class="p-2 rounded-sm text-sm text-white font-semibold uppercase bg-green-500 hover:bg-green-700 transition-colors duration-500"
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
