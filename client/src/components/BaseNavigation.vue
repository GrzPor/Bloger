<template lang="pug">
    .flex.justify-between.items-start.mb-12
        h1.text-4xl.font-bold(v-html="title")
        router-link(
            :to="{ name: btnUrl }"
            v-html="btnTitle"
            class="p-2 rounded-sm text-sm text-white font-semibold uppercase flex-shrink-0 bg-green-500 hover:bg-green-700 transition-colors duration-500"
        ) Back to all posts
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: null,
            },
            btnUrl: {
                type: String,
                default: 'posts',
            },
            btnTitle: {
                type: String,
                default: 'Back to all posts',
            },
        }
    }
</script>
