<template lang="pug">
	.shadow-lg.bg-white.rounded-lg.p-8
		h3.text-2xl.font-bold.mb-1(v-html="post.title")
		p.text-lg.font-semibold.truncate(v-html="post.descripton")
		.text-sm.mt-8
			PostOption(title="Tags:" :data="post.tags")
			PostOption(title="Categories:" :data="post.categories")
			PostOption(title="Created:" :data="euFormatDate(post.createdAt)")
			PostOption(title="Created by:" :data="post.author")
		.mt-8
			router-link(
				:to="{ name: 'single-post', params: { id: post._id }}"
				class="mr-2 p-2 inline-block w-24 rounded-sm text-center text-sm text-white font-semibold bg-blue-400 hover:bg-blue-600 transition-colors duration-500"
			) Details
			router-link(
				:to="{ 'name': 'editPost', params: { id: post._id } }"
				class="mr-2 p-2 inline-block w-24 rounded-sm text-center text-sm text-white font-semibold bg-green-700 hover:bg-green-900 transition-colors duration-500"
			) Edit
			a(
				@click="deletePost(post._id)"
				class="mr-2 p-2 inline-block w-24 rounded-sm text-center text-sm text-white font-semibold bg-red-600 hover:bg-red-800 transition-colors duration-500 cursor-pointer"
			) Delete
</template>

<script>

import PostOption from './PostOption.vue';
import { formatDate } from '../mixins/formatDate';
import { deletePost } from '../services/axios'

export default {
	mixins: [formatDate],
	components: {
		PostOption,
	},
	props: {
		post: {
			type: Object,
			default: () => {}
		}
	},
	methods: {
		deletePost(id) {
			deletePost(id)
				.then(() => this.$router.go(0))
		},
	},

};
</script>
