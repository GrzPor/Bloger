<template lang="pug">
	.py-4
		.flex.justify-between.items-center.mb-12
			h1.text-4xl All Posts
			router-link(
				:to="{ name: 'create-post' }" 
				class="p-2 rounded-lg text-white bg-yellow-500 hover:bg-yellow-700 transition-colors duration-500 uppercase font-bold"
			) Create new post
		.grid.grid-cols-3.gap-10
			.bg-white.rounded-lg.p-8(v-for="(post, index) in allPosts" :key="index")
				p.text-2xl.mb-4(v-html="post.title")
				p(v-html="post.descripton")
				p(v-html="post.tags")
				p(v-html="post.categories")
				p(v-html="post.createdAt")
				p(v-html="post.author")
				.mt-8
					router-link(
						:to="{ name: 'single-post', params: { id: post._id }}"
						class="mr-2 p-2 inline-block w-24 rounded-lg text-center text-white bg-blue-400 hover:bg-blue-600 transition-colors duration-500"
					) Details
					a(
						href=""
						class="mr-2 p-2 inline-block w-24 rounded-lg text-center text-white bg-green-700 hover:bg-green-900 transition-colors duration-500"
					) Edit
					a(
						@click="deletePost(post._id)" 
						class="mr-2 p-2 inline-block w-24 rounded-lg text-center text-white bg-red-600 hover:bg-red-800 transition-colors duration-500"
					) Delete
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
	methods: {
		deletePost(id) {
			axios.delete(`http://localhost:8080/posts/${id}`)
				.then((res) => {
					console.log(res);
					this.$router.go(0)	
				})
		}
	}
};
</script>

<style></style>
