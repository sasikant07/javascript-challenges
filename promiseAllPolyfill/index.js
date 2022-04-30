function showText(text, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, time)
    });
};

// Promise.all([
//     showText("hello", 3000),
//     Promise.resolve('Hi'),
//     Promise.reject('Bye') 
// ]).then(response => console.log(response));

// Polyfill
function myPromiseAll(promises) {
    let result = [];
    return new Promise((resolve, reject) => {
        promises.forEach((element, index) => {
            element.then(response => {
                result.push(response);
                if (index === promises.length - 1) {
                    resolve(response);
                }
            }).catch(error => reject(error));
        });
    })
}

myPromiseAll([
    showText("hello", 3000),
    Promise.resolve('Hi'),
    Promise.reject('Bye') 
]).then(response => console.log(response));