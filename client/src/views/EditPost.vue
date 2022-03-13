<template lang="pug">
    .py-8
        BaseNavigation(:title="'Edit post: ' + singlePost.title")
        .grid.grid-cols-2.gap-4
            BaseInput(title="Tytul" v-model="singlePost.title")
            BaseInput(title="Tagi" v-model="singlePost.tags")
            BaseSelect(title="Kategories" v-model="singlePost.categories" :options="allCategories")
            BaseTextarea(title="Opis" v-model="singlePost.descripton")
            .flex.justify-end.col-span-2
                button(
                    @click="updatePost"
                    class="p-2 rounded-sm text-sm text-white font-semibold uppercase bg-green-500 hover:bg-green-700 transition-colors duration-500"
                ) Submit
</template>

<script>
import { getPost, updatePost } from '../services/axios'

    export default {
        props: ["id"],
        data() {
            return {
                singlePost: {},
                allCategories: ['Front-end', 'Back-end', 'Design', 'Project management', 'Testing', 'Others']
            }
        },
        mounted() {
            getPost(this.id)
                .then(res => this.singlePost = res.data);
        },
        methods: {
            updatePost() {
                const newData = {
                    title: this.singlePost.title,
                    descripton: this.singlePost.descripton,
                    tags: this.singlePost.tags,
                    categories: this.singlePost.categories
                }
                updatePost(this.id, newData)
                    .then(() => this.$router.push({ name: 'posts' }))
                    .catch ((err) => {
                        console.log(`There was some problem in update post: ${err.message}`)
                    })
            }
        }
    }
</script>
