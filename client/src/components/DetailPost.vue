<template lang="pug">
.py-4
	.flex.justify-between.items-center.mb-12
		h1.text-4xl Details of post with id: {{ id }}
		router-link(
			:to="{ name: 'posts' }"
			class="p-2 rounded-lg text-white bg-yellow-500 hover:bg-yellow-700 transition-colors duration-500 uppercase font-bold"
		) Back to all posts  
	div
		p(v-html="singlePost.title")
		p(v-html="singlePost.descripton")
		p(v-html="singlePost.tags")
		p(v-html="singlePost.categories")
		p(v-html="singlePost.createdAt")
		p(v-html="singlePost.author")

</template>

<script>

import axios from 'axios';

export default {
	props: ["id"],
	data() {
		return {
			singlePost: {},
		}
	},
	mounted() {
		axios.get(`http://localhost:8080/posts/${this.id}`)
			.then(res => {
				this.singlePost = res.data
			});
	}
    
}
</script>

<style>

</style>