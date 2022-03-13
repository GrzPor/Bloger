<template lang="pug">
    .flex.flex-col.mt-4(v-if="errors.length")
        p.text-sm.text-black.font-semibold Musisz pozbyc sie ponizszych bledow:
        ul.text-sm.text-red-500.font-medium
            li(v-for="(error, index) of errors" :key="index" v-html="error")
</template>

<script>
    export default {
        props: {
            errors: {
                type: Array,
                default: () => [],
            },
        }
    }
</script>
