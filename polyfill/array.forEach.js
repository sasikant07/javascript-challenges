// Polyfill for Array.forEach()

Array.prototype.myForEach = function (callback) {
    for (var i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

const arrData = [0,1,2,3,4,5,6,7,8,9];

arrData.myForEach((ele) => {
    console.log(ele);
})

// Output
// 1 2 3 4 5 6 7 8 9