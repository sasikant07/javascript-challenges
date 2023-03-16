// Polyfill for Promise.any()
const login = new Promise((resolve, reject) => {
    reject("Login Success");
})

const signup = new Promise((resolve, reject) => {
    resolve("Signup Success");
})

Promise.customPromiseAny = (arrayOfPromise) => {
    return new Promise ((resolve, reject) => {
        const error = [];
        let counter = 0;

        for (let i = 0; i < arrayOfPromise.length; i++) {
            Promise.resolve(arrayOfPromise[i]).then(data => {
                resolve(data);
            }).catch(e => {
                counter++;
                error[i] = e;
                if (counter === arrayOfPromise.length) {
                    reject("All promise were rejected");
                }
            })
        }
    })
}

Promise.customPromiseAny([login, signup])
    .then(result => console.log(result))        // Signup Success
    .catch(e => console.log(e));