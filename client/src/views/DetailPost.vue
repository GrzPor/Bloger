<template lang="pug">
.py-8
	BaseNavigation(:title="'Details of post with id: ' + id")
	div
		p(v-html="singlePost.title")
		p(v-html="singlePost.descripton")
		p(v-html="singlePost.tags")
		p(v-html="singlePost.categories")
		p(v-html="euFormatDate(singlePost.createdAt)")
		p(v-html="singlePost.author")

</template>

<script>

import axios from 'axios';
import { formatDate } from '../mixins/formatDate';

export default {
	mixins: [formatDate],
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
