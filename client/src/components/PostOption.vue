<template lang="pug" functional>
    div
        span.text-black.font-semibold.mr-1(v-html="props.title")
        span(v-html="props.data")
</template>
