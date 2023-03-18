// Polyfill for String.repeat()

// "abc".repeat(-1);   // RangeError
// "abc".repeat(0);    // ''
// "abc".repeat(1);    // 'abc'
// "abc".repeat(2);    // 'abc abc'
// "abc".repeat(3.5);  // 'abcabcabc' (count will be converted to integer)
// "abc".repeat(1/0);  // RangeError

String.prototype.myRepeat = function(count) {
    if (this === null) {
        throw new TypeError(`can't convert`);
    }

    count = +count; //count converted into number

    if (count < 0) {
        throw new RangeError('count must be non-negative');
    }

    if (count == Infinity) {
        throw new RangeError('count must be less than infinity');
    }

    count = Math.floor(count); // to convert the decimal 2.8 to 2

    if (this.length == 0 || count == 0) {
        return "";
    }

    let result = "";
    while (count) {
        result += this;     // this => "abc "
        count--;
    }
    return result;
}

console.log("abc ".myRepeat(2));    // abc abc
// console.log("abc ".myRepeat(-10));
// console.log("abc ".myRepeat(0));
// console.log("abc ".myRepeat(2.8));
// console.log("abc ".myRepeat(1/0));