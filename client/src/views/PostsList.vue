<template lang="pug">
    .py-8
        BaseNavigation(title="All Posts" btnUrl="create-post" btnTitle="Create new post")
        .text-center.mt-16(v-if="!allPosts.length")
            h2.text-3xl.font-medium There is no post, but you can create one!
        .grid.grid-cols-3.gap-10
            Post(v-for="(post, index) in allPosts" :key="index" :post="post")
</template>

<script>

import Post from '../components/Post.vue'
import { getPosts } from '../services/axios'

export default {
    components: {
        Post,
    },
    computed: {
		allPosts() {
			return this.posts;
		},
	},
	data() {
		return {
			posts: [],
		};
	},
	mounted() {
		getPosts()
			.then(res => this.posts = res.data );
	},
};
</script>
