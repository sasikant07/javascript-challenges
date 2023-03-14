// Polyfill for String.split()

const split = (string, delimiter) => {
    const res = []

    if (delimiter === '') return Array.from(string);

    const startSplit = (str, i) => {
        if (i >= string.length) return

        const index = str.indexOf(delimiter);

        if (index >= 0) {
            res.push(str.substring(0, index));
            startSplit(str.substring(index + delimiter.length), index + delimiter.length);
        } else {
            res.push(str);
        }
    }

    startSplit(string, 0);

    return res;
}

console.log(split("The quick the fox jumps the lazy dog", "the"));
// [ "The quick", " fox jumps ", " lazy dog." ]

console.log(split("The quick the fox jumps the lazy the dog.", ""));
// [
//     'T', 'h', 'e', ' ', 'q', 'u', 'i',
//     'c', 'k', ' ', 't', 'h', 'e', ' ',
//     'f', 'o', 'x', ' ', 'j', 'u', 'm',
//     'p', 's', ' ', 't', 'h', 'e', ' ',
//     'l', 'a', 'z', 'y', ' ', 't', 'h',
//     'e', ' ', 'd', 'o', 'g', '.'
// ]

console.log(split("The quick the fox jumps the lazy dog.", " "));
// [
//     'The',   'quick',
//     'the',   'fox',
//     'jumps', 'the',
//     'lazy',  'dog.'
// ]