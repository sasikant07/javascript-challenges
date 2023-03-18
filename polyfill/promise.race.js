// Polyfill for promise.race()
const login = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Login Success");
    }, 1000)
})

const signup = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Signup Success");
    }, 1000)
})

const number = 10;

Promise.customPromiseRace = (arrayOfPromise) => {
    return new Promise ((resolve, reject) => {
        const error = [];
        let counter = 0;

        for (let i = 0; i < arrayOfPromise.length; i++) {
            Promise.resolve(arrayOfPromise[i])
                .then((data) => resolve(data), (e) => reject(e));
        }
    })
}

Promise.customPromiseRace([10, login, signup])
    .then (result => console.log(result))
    .catch(e => console.log(e));

    // 10