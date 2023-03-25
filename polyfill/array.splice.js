// Polyfill for Array.splice()

if (!Array.prototype.customSplice) {
    Array.prototype.customSplice = function(startIndex, numItems) {
        let array = this;
        let endIndex = startIndex + numItems;

        let itemsBeforeSplice = [];     // arrat till startIndex
        let splicedItems = [];  // removed items array
        let itemsAfterSplice = [];  // array from endIndex

        for (let i = 0; i < array.length; i++) {
            if (i < startIndex) {
                itemsBeforeSplice.push(array[i]);
            }

            if (i >= startIndex && i < endIndex) {
                splicedItems.push(array[i]);
            }

            if (i >= endIndex) {
                itemsAfterSplice.push(array[i]);
            }
        }

        // Insert all arguments/ parameters after numItems
        for (let i = 2; i < array.length; i++) {
            itemsBeforeSplice.push(array[i]);
        }

        // Combine before/after arrays
        var remainingItems = itemsBeforeSplice.concat(itemsAfterSplice);

        // Rewrite Array

        const len = Math.max(array.length, remainingItems.length);
        for (let i = 0; i < len; i++) {
            if (remainingItems.length > i) {
                array[i] = remainingItems[i];
            } else {
                array.pop();
            }
        }
        return splicedItems;
    }
}

const arr = [1, 2, 3, 4, 5, 6];

// console.log(arr.customSplice(2, 0, 9, 10));
// // call custom splice() on array to replace items
// console.log(arr.customSplice(2, 2, 8, 9, 10));

console.log(arr.customSplice(3, 1));

console.log("Final Array: ", arr);