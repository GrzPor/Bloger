<template lang="html">
	<div>
		<h1>All Posts</h1>
		<div>
			<div v-for="(post, index) in allPosts" :key="index">
				<p v-html="post.title"></p>
				<p v-html="post.description"></p>
				<p v-html="post.tags"></p>
				<p v-html="post.categories"></p>
				<p v-html="post.createdAt"></p>
				<p v-html="post.author"></p>
			</div>
		</div>
	</div>
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
