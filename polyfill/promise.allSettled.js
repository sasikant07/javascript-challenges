// polyfill for Promise.allSettled()

const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "after 2 sec")
});

const promise4 = Promise.reject("reject-1");
const promise5 = Promise.reject("reject-2");

const promiseArray = [promise1, promise2, promise3, promise4, promise5];


function promiseAllSettled(promiseArray) {
    let output = [];

    return new Promise((resolve, reject) => {
        promiseArray.forEach((promise, index) => {
            promise.then((res) => {
                output.push({
                    status: "fulfilled",
                    value: res,
                });
    
                if (index === promiseArray.length - 1) {
                    resolve(output);
                }
            }).catch((err) => {
                output.push({
                    status: "rejected",
                    reason: err,
                })
                if (index === promiseArray.length - 1) {
                    resolve(output);
                }
            })
        });
    })
}

promiseAllSettled(promiseArray).then(res => {
    console.log(res);;
})