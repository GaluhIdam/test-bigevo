function countOccurrences(data) {
    const occurrences = {};

    for (let i = 0; i < data.length; i++) {
        const currentChar = data[i];

        if (occurrences[currentChar]) {
            occurrences[currentChar]++;
        } else {
            occurrences[currentChar] = 1;
        }
    }

    for (const char in occurrences) {
        console.log(`${char} = ${occurrences[char]}`);
    }
}

const data = 'aaabbcccaaaac';
countOccurrences(data);
