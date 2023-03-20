// Polyfill for string.includes()

String.prototype.myIncludes =  function(str) {
    let returnValue = false;

    if (this.indexOf(str) !== -1) {
        returnValue = true;
    }

    return returnValue;
}

console.log("abcde".myIncludes("cd"));  // true


if (!String.prototype.customIncludes) {
    String.prototype.customIncludes = function(search, start) {
        if (typeof start !== 'number') {
            start = 0;
        }

        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    }
}

console.log("Twinkle Twinkle little stars".customIncludes("stars"));    // true
console.log("Twinkle Twinkle little stars".customIncludes("none"));    // false