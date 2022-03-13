<template lang="pug">
	.flex.flex-col.shadow-lg.bg-white.rounded-lg.p-8.h-80
		h3.text-2xl.font-bold.mb-1.truncate(v-html="post.title")
		p.text-lg.font-semibold.truncate(v-html="post.descripton")
		.text-sm.mt-8
			PostOption(title="Tags:" :data="post.tags")
			PostOption(title="Categories:" :data="post.categories")
			PostOption(title="Created:" :data="euFormatDate(post.createdAt)")
			PostOption(v-if="post.edited" title="Last edit:" :data="post.edited")
			PostOption(title="Created by:" :data="post.author")
		.flex.mt-auto
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
				class="relative mr-2 p-2 inline-block w-24 rounded-sm text-center text-sm text-white font-semibold bg-red-600 hover:bg-red-800 transition-colors duration-500 cursor-pointer"
			)
				span.spinner(v-show="showSpinner")
				span(v-show="!showSpinner") Delete
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
	data() {
		return {
			showSpinner: false,
		}
	},
	methods: {
		deletePost(id) {
			this.showSpinner = true
			deletePost(id)
				.then(() => this.$router.go(0))
		},
	},

};
</script>

<style lang="scss" scoped>
@keyframes spinner {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
.spinner {
	width: 15px;
	height: 15px;
	display: block;
	border-radius: 50%;
	border: 2px solid #fff;
	border-left: 2px solid rgba(255, 255, 255, 0.5);
	position: absolute;
	top: 50%;
	left: 50%;
	animation: spinner 1s infinite linear;
}
</style>