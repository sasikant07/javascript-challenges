// function showText(text, time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(text);
//         }, time)
//     });
// };

// Promise.all([
//     showText("hello", 3000),
//     Promise.resolve('Hi'),
//     Promise.reject('Bye') 
// ]).then(response => console.log(response));

// Polyfill
// function myPromiseAll(promises) {
//     let result = [];
//     return new Promise((resolve, reject) => {
//         promises.forEach((element, index) => {
//             element.then(response => {
//                 result[index] = response;
//                 if (index === promises.length - 1) {
//                     resolve(response);
//                 }
//             }).catch(error => reject(error));
//         });
//     })
// }

// myPromiseAll([
//     showText("hello", 3000),
//     Promise.resolve('Hi'),
//     // Promise.reject('Bye') 
// ]).then(response => console.log(response));

function myPromiseAll(promises) {
    //to store results 
    const results = [];
    
    //to track how many promises have completed
    let promisesCompleted = 0;
  
    // return new promise
    return new Promise((resolve, reject) => {
  
      promises.forEach((task, index) => {
       //if promise passes
        task.then((val) => {
          //store its outcome and increment the count 
          results[index] = val;
          promisesCompleted++;
                                                  
          //if all the promises are completed, 
          //resolve and return the result
          if (promisesCompleted === promises.length) {
            resolve(results)
          }
        })
           //if any promise fails, reject.
          .catch(error => {
            reject(error)
          })
      })
    });
  }

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The first promise has resolved');
      resolve(10);
    }, 1 * 1000);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The second promise has resolved');
      resolve(20);
    }, 2 * 1000);
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The third promise has resolved');
      resolve(30);
    }, 3 * 1000);
  });

  myPromiseAll([p1, p2, p3]).then((results) => {
    const total = results.reduce((prev, curr) => prev + curr);
  
    console.log(`Results: ${results}`);
    console.log(`Total: ${total}`);
  });