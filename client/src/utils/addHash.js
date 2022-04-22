export default function addHash(value) {
    const getWordsList = value.split(' ');

    const hashesList = getWordsList.map(word => {
        if (word.charAt(0) !== '#' && word.length) {
            return `#${word}`;
        }

        return word;
    });

    return hashesList.join(' ');
}
