<template lang="pug">
    label.block
        span.text-xs.text-black.font-medium.uppercase(v-html="title")
        input(
            type="text"
            :value="value"
            @input="$emit('input', $event.target.value)"
            class="mt-1 block w-full rounded-sm border-black shadow-md focus:border-green-500"
        )
</template>

<script>
    export default {
        props: {
            value: {
                type: [String, Number],
                default: null,
            },
            title: {
                type: String,
                default: null,
            }
        }
    }
</script>
