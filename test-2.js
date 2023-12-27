function formatText(data) {
    const words = data.toLowerCase().split(' ');

    const formattedTitle = words.map(word => capitalize(word)).join(' ');
    const formattedNormal = capitalize(words.join(' '));

    console.log(`Format Judul: ${formattedTitle}`);
    console.log(`Format Biasa: ${formattedNormal}`);
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

const data = 'SeLamAT PAGi semua halOo';
formatText(data);
