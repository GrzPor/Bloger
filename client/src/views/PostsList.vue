<template lang="pug">
	.py-8
		BaseNavigation(title="All Posts" btnUrl="create-post" btnTitle="Create new post")
		BaseSelect.mb-12(title="Wybierz kategorie postow" :required="false" v-model="postCategory" :options="allCategories")
		.text-center.mt-16(v-if="!filteredPosts.length")
			h2(class="text-xl md:text-3xl font-medium") There is no post, but you can create one!
		section(class="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3")
			Post(v-for="(post, index) in filteredPosts" :key="index" :post="post")
</template>

<script>
import { allCategories } from '../mixins/allCategories';
import Post from '../components/Post.vue';
import { getPosts } from '../services/axios';

export default {
    mixins: [allCategories],
    components: {
        Post,
    },
    computed: {
        filteredPosts() {
            if (this.postCategory === 'All') {
                return this.posts;
            }

            return this.posts.filter(
                post => post.categories === this.postCategory,
            );
        },
    },
    data() {
        return {
            postCategory: 'All',
            posts: [],
            sortDate: 'desc',
            datesOptions: ['desc', 'asc'],
        };
    },
    mounted() {
        getPosts().then(res => (this.posts = res.data));
    },
};
</script>
