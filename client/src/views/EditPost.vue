<template lang="pug">
    .py-8
        BaseNavigation(:title="'Edit post: ' + singlePost.title")
        .grid.grid-cols-2.gap-4
            BaseInput(title="Tytul" v-model="singlePost.title")
            BaseInput(title="Opis" v-model="singlePost.descripton")
            BaseInput(title="Tagi" v-model="singlePost.tags")
            BaseInput(title="Kategorie" v-model="singlePost.categories")
            .flex.justify-end.col-span-2
                button(
                    @click="updatePost"
                    class="p-2 rounded-sm text-sm text-white font-semibold uppercase bg-green-500 hover:bg-green-700 transition-colors duration-500"
                ) Submit
</template>

<script>
import axios from 'axios';
    export default {
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
        },
        methods: {
            updatePost() {
                axios.put(`http://localhost:8080/posts/${this.id}`, {
                    title: this.singlePost.title,
                    descripton: this.singlePost.descripton,
                    tags: this.singlePost.tags,
                    categories: this.singlePost.categories
                })
                .then(() => {
                    this.$router.push({ name: 'posts' })
                })
                .catch ((err) => {
                    console.log(err.message)
                })
            }
        }
    }
</script>
