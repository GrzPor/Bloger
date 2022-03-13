export const baseFormElements = {
    props: {
        value: {
            type: [String, Number],
            default: null,
        },
        title: {
            type: String,
            default: null,
        },
        required: {
            type: Boolean,
            default: true,
        }
    },
    methods: {
        updateData(event) {
            this.$emit('input', event.target.value)
        }
    }
}