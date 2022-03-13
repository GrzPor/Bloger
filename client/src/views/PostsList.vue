<template lang="pug">
	.py-8
		BaseNavigation(title="All Posts" btnUrl="create-post" btnTitle="Create new post")
		BaseSelect.mb-12(title="Wybierz kategorie postow" :required="false" v-model="postCategory" :options="allCategories")
		.text-center.mt-16(v-if="!filteredPosts.length")
			h2.text-3xl.font-medium There is no post, but you can create one!
		.grid.grid-cols-3.gap-10
			Post(v-for="(post, index) in filteredPosts" :key="index" :post="post")
</template>

<script>

import Post from '../components/Post.vue'
import { getPosts } from '../services/axios'

export default {
    components: {
        Post,
    },
    computed: {
		filteredPosts() {
			if (this.postCategory === 'All') {
				return this.posts
			}

			return this.posts.filter(post => post.categories === this.postCategory)
		},
	},
	data() {
		return {
			postCategory: 'All',
			posts: [],
			allCategories: ['All', 'Front-end', 'Back-end', 'Design', 'Project management', 'Testing', 'Others'],
		};
	},
	mounted() {
		getPosts()
			.then(res => this.posts = res.data );
	},
};
</script>
