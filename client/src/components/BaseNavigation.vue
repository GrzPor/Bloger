<template lang="pug">
    .flex.justify-between.items-start.mb-12
        h1.font-bold(v-html="title" class="text-2xl md:text-4xl")
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
    },
};
</script>
