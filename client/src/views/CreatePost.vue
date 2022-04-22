<template lang="pug">
	.py-8
		BaseNavigation(title="Create a new Post")
		div(class="grid gap-4 grid-cols-1 md:grid-cols-2")
			BaseInput(title="Tytul" v-model="title")
			BaseInput(title="Tagi" v-model="tags" @keydown.native.space="sendTags(tags)")
			BaseSelect(title="Kategories" v-model="categories" :options="allCategories" bigger)
			BaseTextarea(title="Opis" v-model="description" bigger)
			Errors(:errors="errors")
			.flex.justify-end.mt-4(:class="{'col-span md:col-span-2': !errors.length, 'items-start': errors.length}")
				button(
					@click="createPost"
					class="p-2 rounded-sm text-sm text-white font-semibold uppercase bg-green-500 hover:bg-green-700 transition-colors duration-500"
				) Submit
</template>

<script>
import { allCategories } from '../mixins/allCategories';
import { createPost } from '../services/axios';
import Errors from '../components/Errors';
import addHash from '../utils/addHash';

export default {
    mixins: [allCategories],
    components: {
        Errors,
    },
    data() {
        return {
            title: null,
            description: null,
            tags: null,
            categories: null,
            errors: [],
        };
    },
    methods: {
        sendTags(tags) {
            this.tags = addHash(tags);
        },
        createPost() {
            this.errors = [];
            if (
                this.title &&
                this.description &&
                this.tags &&
                this.categories
            ) {
                const newPost = {
                    title: this.title,
                    descripton: this.description,
                    tags: this.tags,
                    categories: this.categories,
                };
                createPost(newPost)
                    .then(() => this.$router.push({ name: 'posts' }))
                    .catch(err => {
                        console.log(`Post request error: ${err.message}`);
                    });
            } else {
                if (!this.title) this.errors.push('Brak title');
                if (!this.description) this.errors.push('Brak description');
                if (!this.tags) this.errors.push('Brak tags');
                if (!this.categories) this.errors.push('Brak categories');
            }
        },
    },
};
</script>
