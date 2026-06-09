async function task(id) {
  console.log(`Start ${id}`);
  await new Promise(res => setTimeout(res, 100));
  console.log(`End ${id}`);
}

async function main() {
  const ids = [1, 2];
  ids.forEach(async (id) => {
    await task(id);
  });
  console.log("Finished Main");
}

main(); // Output:
// Start 1
// Start 2
// Finished Main
// End 1
// End 2

// The issue here is that `forEach` does not wait for the async function to complete before moving to the next
// iteration. To fix this, we can use a `for...of` loop instead:
//==============================================================================================

const p1 = new Promise((res, rej) => setTimeout(() => res('Success'), 100));
const p2 = new Promise((res, rej) => setTimeout(() => rej('Error'), 50));

async function check() {
  try {
    const results = await Promise.all([
      p1.catch(e => e), 
      p2.catch(e => e)
    ]);
    console.log(results);
  } catch (err) {
    console.log("Caught:", err);
  }
}

check(); // Output: [ 'Success', 'Error' ]

// In this case, we catch the error from each promise individually, allowing us to handle both success and failure without the entire `Promise.all` rejecting.
//==============================================================================================
async function test() {
  console.log(1);
  return 2;
}

console.log(3);
const result = test();
console.log(result);
result.then(console.log);
// Output:
// 3
// 1
// Promise { <pending> }
// 2

// The `test` function is asynchronous, so it returns a Promise. When we call `test()`, it logs `1` and returns a Promise that resolves to `2`. The main thread continues to execute, logging `3` and the Promise object before the resolved value is logged.
//==============================================================================================
async function test() {
  console.log(1);

  await Promise.resolve();

  console.log(2);
}

test();

console.log(3); // Output:
// 1
// 3
// 2

// The `await` statement causes the function to pause until the Promise is resolved, allowing the main thread to continue executing and log `3` before logging `2`. 
//==============================================================================================
async function test() {
  console.log("A");

  setTimeout(() => console.log("B"));

  await Promise.resolve();

  console.log("C");
}

test();

console.log("D"); // Output:
// A
// D
// B
// C

// The `setTimeout` callback is placed in the event queue and will execute after the current call stack is empty. The `await` statement allows the main thread to continue executing, logging `D` before the `setTimeout` callback logs `B` and the final log statement logs `C`.
//==============================================================================================
Promise.resolve().then(() => {
  console.log(1);

  setTimeout(() => console.log(2), 0);
});

setTimeout(() => console.log(3), 0); // Output:
// 1
// 3
// 2

// The `Promise.resolve().then()` callback is executed before the `setTimeout` callbacks because it is part of the microtask queue, which has higher priority than the macrotask queue where `setTimeout` callbacks are placed. Therefore, `1` is logged first, followed by `3`, and finally `2`.   
//==============================================================================================
console.log("start");

async function foo() {
  console.log("foo");
  await Promise.resolve();
  console.log("bar");
}

foo();

console.log("end");
// Output:
// start
// foo
// end
// bar

// The `foo` function is asynchronous, so it logs `foo` and then yields control back to the main thread due to the `await` statement. The main thread continues to execute, logging `end`, before the resolved value from the Promise allows `bar` to be logged.
//==============================================================================================
Promise.resolve()
  .then(() => {
    console.log(1);
    return 2;
  })
  .then((data) => {
    console.log(data);
  });
  // Output:
    // 1
    // 2
    
// The first `then` callback logs `1` and returns `2`, which is passed to the next `then` callback that logs `2`.
//==============================================================================================
Promise.resolve()
  .then(() => {
    throw new Error("X");
  })
  .catch((err) => {
    console.log(err.message);
  });
  // Output:
    // X
    
// The `then` callback throws an error, which is caught by the `catch` callback that logs the error message `X`.
//==============================================================================================
async function test() {
  return 10;
}

console.log(test()); // Output: Promise { 10 }

// The `test` function is asynchronous, so it returns a Promise that resolves to `10`. When we log the result of calling `test()`, we see the Promise object rather than the resolved value. To access the resolved value, we can use `.then()` or `await` it in another async function.
//==============================================================================================
async function test() {
  return Promise.resolve(5);
}

test().then(console.log); // Output: 5
//======================================================================================
setTimeout(() => console.log(1));

Promise.resolve().then(() => {
  console.log(2);

  setTimeout(() => console.log(3));
});

console.log(4);
//========================================================================================
Promise.resolve()
  .then(() => {
    console.log(1);
  })
  .then(() => {
    console.log(2);
  });

Promise.resolve().then(() => {
  console.log(3);
}); // Output:
// 1
// 3
// 2

// The first `then` callback logs `1`, and the second `then` callback logs `2`. The second Promise's `then` callback logs `3`. Since both Promises are resolved immediately, their callbacks are placed in the microtask queue. The order of execution is determined by the order in which they were added to the queue, resulting in `1`, then `3`, and finally `2`.   
//========================================================================================
setTimeout(() => console.log("timeout"), 0);

(async function () {
  console.log("async start");

  await null;

  console.log("async end");
})();

console.log("script end");
// Output:
// async start
// script end
// async end
// timeout

// The `await null` statement causes the async function to pause and yield control back to the main thread, allowing it to log `script end` before logging `async end`. The `setTimeout` callback is placed in the macrotask queue and will execute after all microtasks (like the async function) have completed, resulting in `timeout` being logged last.    
//========================================================================================
async function test() {
  console.log(1);

  await Promise.resolve();

  console.log(2);

  await Promise.resolve();

  console.log(3);
}

test();

console.log(4);
// Output:
// 1
// 4
// 2
// 3

// The `await` statements cause the async function to pause and yield control back to the main thread, allowing it to log `4` before logging `2` and `3`. Each `await` creates a new microtask, so the function continues executing after each `await` is resolved.
//========================================================================================
setTimeout(() => console.log(1), 0);

Promise.resolve().then(() => {
  console.log(2);

  while (true) {}
});
// Output:
// 2

// Eveny Loop block forever

// The `setTimeout` callback is placed in the macrotask queue, while the `Promise.resolve().then()` callback is placed in the microtask queue. Since microtasks have higher priority than macrotasks, the `then` callback executes first, logging `2`. However, the infinite loop prevents any further code from executing, including the `setTimeout` callback, which means `1` will never be logged.
//========================================================================================
console.log(1);

async function foo() {
  console.log(2);

  await Promise.resolve();

  console.log(3);
}

foo();

Promise.resolve().then(() => console.log(4));

console.log(5);
// Output:
// 1
// 2
// 5
// 4
// 3
//========================================================================================
Promise.resolve()
  .then(() => console.log("A"))
  .then(() => {
    setTimeout(() => console.log("B"));
  })
  .then(() => console.log("C"));
// Output:
// A
// C
// B

// The first `then` callback logs `A`, and the second `then` callback schedules a `setTimeout` to log `B`. The third `then` callback logs `C`. Since the `setTimeout` is a macrotask, it will execute after all microtasks (the `then` callbacks) have completed, resulting in `B` being logged last.   
//========================================================================================
setTimeout(() => {
  console.log("timeout");
}, 0);

for (let i = 0; i < 1e9; i++) {}
// Output:
// timeout
// But delayed heavily due to the long-running loop
//=========================================================================================
async function foo() {
  return await Promise.resolve(10);
}

foo().then(console.log); // Output: 10
//=========================================================================================
Promise.resolve()
  .then(() => {
    console.log(1);
    return 2;
  })
  .finally(() => {
    console.log("finally");
  })
  .then(console.log);
// Output:
// 1
// finally
// 2
//=========================================================================================
console.log("start");

setTimeout(() => {
  console.log("timeout1");

  Promise.resolve().then(() => {
    console.log("promise inside timeout");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("promise1");

  setTimeout(() => {
    console.log("timeout2");
  }, 0);
});

console.log("end");
// Output:
// start
// end
// promise1
// timeout1
// promise inside timeout
// timeout2

// The `setTimeout` callbacks are placed in the macrotask queue, while the `Promise.resolve().then()` callbacks are placed in the microtask queue. The main thread executes first, logging `start` and `end`. Then, the first Promise's `then` callback logs `promise1`, and the second Promise's `then` callback logs `promise inside timeout` after the first timeout logs `timeout1`. Finally, the second timeout logs `timeout2`.   
//=========================================================================================

async function test() {
  console.log(1);
  setTimeout(() => console.log(2));
  await Promise.resolve();
  console.log(3);
}
test();
console.log(4);

// Output:
// 1
// 4
// 3
// 2
//=========================================================================================