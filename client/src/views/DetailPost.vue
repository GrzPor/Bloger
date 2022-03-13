<template lang="pug">
.py-8
	BaseNavigation(title="Post details")
	div
		h3.text-2xl.font-semibold(v-html="singlePost.title")
		.mt-4.text-sm.font-semibold
			div
				span.text-black Last edited:
				span.ml-1.text-green-500(v-if="singlePost.edited" v-html="singlePost.edited")
			div
				span.text-black Created at:
				span.ml-1.text-green-500(v-html="euFormatDate(singlePost.createdAt)")
			div
				span.text-black Author:
				span.ml-1.text-green-500(v-html="singlePost.author")
		.mt-4
			.flex.text-sm.font-semibold
				.mr-2
					span.text-black Tagi:
					span.ml-1.text-green-500(v-html="singlePost.tags")
				.mr-2
					span.text-black Kategorie:
					span.ml-1.text-green-500(v-html="singlePost.categories")
		.mt-2.text-xl.font-regular.leading-relaxed(v-html="singlePost.descripton")
</template>

<script>

import { formatDate } from '../mixins/formatDate';
import { getPost } from '../services/axios'

export default {
	mixins: [formatDate],
	props: ["id"],
	data() {
		return {
			singlePost: {},
		}
	},
	mounted() {
		getPost(this.id)
			.then(res => this.singlePost = res.data);
	}

}
</script>
