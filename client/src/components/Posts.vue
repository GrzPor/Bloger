<template lang="pug">
	.py-4
		.flex.justify-between.items-center.mb-12
			h1.text-4xl All Posts
			router-link(
				:to="{ name: 'create-post' }" 
				class="p-2 rounded-lg text-white bg-yellow-500 hover:bg-yellow-700 transition-colors duration-500 uppercase font-bold"
			) Create new post
		.grid.grid-cols-3.gap-3
			.mb-8(v-for="(post, index) in allPosts" :key="index")
				p.text-2xl.mb-4(v-html="post.title")
				p(v-html="post.description")
				p(v-html="post.tags")
				p(v-html="post.categories")
				p(v-html="post.createdAt")
				p(v-html="post.author")
				.mt-8
					a(href="" class="mr-2 p-2 rounded-lg text-white bg-blue-400 hover:bg-blue-600 transition-colors duration-500") Details
					a(href="" class="mr-2 p-2 rounded-lg text-white bg-green-700 hover:bg-green-900 transition-colors duration-500") Edit
					a(href="" class="mr-2 p-2 rounded-lg text-white bg-red-600 hover:bg-red-800 transition-colors duration-500") Delete
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			posts: [],
		};
	},
	computed: {
		allPosts() {
			return this.posts;
		},
	},
	mounted() {
		axios.get('http://localhost:8080/posts').then(res => {
			this.posts = res.data;
		});
	},
};
</script>

<style></style>
