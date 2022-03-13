export const formatDate = {
    methods: {
		fillNumbersWithZero(value) {
			return value.toString().padStart(2, 0);
		},
		euFormatDate(date) {
			const formatDate = new Date(date);
			return `${this.fillNumbersWithZero(formatDate.getDate())} - ${this.fillNumbersWithZero((formatDate.getMonth() + 1))} - ${formatDate.getFullYear()}`
		}
	},
}
