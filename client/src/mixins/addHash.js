export const addHash = {
    methods: {
        addHash(value) {
            const getWordsList = value.split(' ');

            const hashesList = getWordsList.map(word => {
                if (word.charAt(0) !== '#' && word.length) {
                    return `#${word}`;
                }

                return word;
            });

            this.value = hashesList.join(' ');
        },
    },
};
