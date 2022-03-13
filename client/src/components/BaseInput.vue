<template lang="pug">
    label.block
        span.text-xs.text-black.font-medium.uppercase(v-html="title")
        span.ml-1.text-green-500(v-if="required") *
        input(
            type="text"
            :value="value"
            @input="updateData($event)"
            class="mt-1 block w-full rounded-sm border-black shadow-md focus:border-green-500"
            :class="bigger ? 'h-16' : 'h-10'"
        )
</template>

<script>
import { baseFormElements } from '../mixins/baseFormElements'

    export default {
        mixins: [baseFormElements]
    }
</script>
