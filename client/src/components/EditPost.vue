<template lang="pug">
    .py-4
        .flex.justify-between.items-center.mb-12
            h1.text-4xl Edit post {{ singlePost._id }}
            router-link(
                :to="{ name: 'posts' }"
                class="p-2 rounded-lg text-white bg-yellow-500 hover:bg-yellow-700 transition-colors duration-500 uppercase font-bold"
            ) Back to all posts  
        div(
            class="grid grid-cols-2 gap-4"
        )
            label.block
                span.text-gray-700 Tytuł
                input(
                    type="text"
                    v-model="singlePost.title"
                    name="title"
                    class="mt-1 block w-full runded-md border-gray-300 shadow-sm focus:border-indigo-300"
                )
            label.block
                span.text-gray-700 Opis
                input(
                    type="text"
                    v-model="singlePost.descripton"
                    name="descripton"
                    class="mt-1 block w-full runded-md border-gray-300 shadow-sm focus:border-indigo-300"
                )
            label.block
                span.text-gray-700 Tagi
                input(
                    type="text"
                    v-model="singlePost.tags"
                    name="tags"
                    class="mt-1 block w-full runded-md border-gray-300 shadow-sm focus:border-indigo-300"
                )
            label.block
                span.text-gray-700 Kategorie
                input(
                    type="text"
                    v-model="singlePost.categories"
                    name="categories"
                    class="mt-1 block w-full runded-md border-gray-300 shadow-sm focus:border-indigo-300"
                )
            .flex.justify-end.col-span-2
                button(
                    @click="updatePost"
                    class="p-2 rounded-lg text-white bg-purple-700 hover:bg-purple-900 transition-colors duration-500 uppercase font-bold"
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

<style lang="scss" scoped>

</style>