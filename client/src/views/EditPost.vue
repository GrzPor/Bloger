<template lang="pug">
    .py-8
        BaseNavigation(:title="'Edit post: ' + singlePost.title")
        .grid.grid-cols-2.gap-4
            BaseInput(title="Tytul" v-model="singlePost.title")
            BaseInput(title="Tagi" v-model="singlePost.tags")
            BaseSelect(title="Kategories" v-model="singlePost.categories" :options="allCategories")
            BaseTextarea(title="Opis" v-model="singlePost.descripton")
            Errors(:errors="errors")
            .flex.justify-end.mt-4(:class="{'col-span-2': !errors.length, 'items-start': errors.length}")
                button(
                    @click="updatePost"
                    class="p-2 rounded-sm text-sm text-white font-semibold uppercase bg-green-500 hover:bg-green-700 transition-colors duration-500"
                ) Submit
</template>

<script>
import { getPost, updatePost } from '../services/axios'
import Errors from '../components/Errors'
import { formatDate } from '../mixins/formatDate'

    export default {
        mixins: [formatDate],
        components: {
            Errors,
        },
        props: ["id"],
        data() {
            return {
                singlePost: {},
                allCategories: ['All', 'Front-end', 'Back-end', 'Design', 'Project management', 'Testing', 'Others'],
                errors: [],
            }
        },
        mounted() {
            getPost(this.id)
                .then(res => this.singlePost = res.data);
        },
        methods: {
            updatePost() {
                this.errors = [];
                if (this.singlePost.title && this.singlePost.descripton &&  this.singlePost.tags && this.singlePost.categories) {
                    const newData = {
                        title: this.singlePost.title,
                        descripton: this.singlePost.descripton,
                        tags: this.singlePost.tags,
                        categories: this.singlePost.categories,
                        edited: this.euFormatDate(new Date())
                    }
                    updatePost(this.id, newData)
                        .then(() => this.$router.push({ name: 'posts' }))
                        .catch ((err) => {
                            console.log(`There was some problem in update post: ${err.message}`)
                        })
                } else {
                    if (!this.singlePost.title) this.errors.push('Brak title')
                    if (!this.singlePost.descripton) this.errors.push('Brak description')
                    if (!this.singlePost.tags) this.errors.push('Brak tags')
                    if (!this.singlePost.categories) this.errors.push('Brak categories')
                }

            }
        }
    }
</script>
