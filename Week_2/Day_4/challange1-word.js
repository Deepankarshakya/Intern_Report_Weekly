function countWords() {
    const words = text.split(" ");
    const maps = new Map();
    for (const word of words) {
        if (maps.has(word)) {
            maps.set(word, maps.get(word) + 1);
        } else {
            maps.set(word, 1);
        }
    }
    return maps;
}
const text = "the quick brown fox jumps over the lazy dog";
console.log(countWords(text));