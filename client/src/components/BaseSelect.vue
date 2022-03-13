<template lang="pug">
    label.block
        span.text-xs.text-black.font-medium.uppercase(v-html="title")
        span.ml-1.text-green-500(v-if="required") *
        select.h-16(
            :value="value"
            @change="updateData($event)"
            class="mt-1 block w-full rounded-sm border-black shadow-md focus:border-green-500"
        )
           option(v-for="(option, index) of options" :key="index" :value="option" :selected="option === value") {{ option }}
</template>

<script>
import { baseFormElements } from '../mixins/baseFormElements'

    export default {
        mixins: [baseFormElements],
        props: {
            options: {
                type: Array,
                default: () => []
            },
        }
    }
</script>
