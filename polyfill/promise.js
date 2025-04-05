class MyPromise {
  constructor(executor) {
    this.onResolve = null;
    this.onReject = null;
    this.fulfilled = false;
    this.rejected = false;
    this.called = false;
    this.value = undefined;

    const resolve = (val) => {
      this.fulfilled = true;
      this.value = val;
      if (typeof this.onResolve === "function" && !this.called) {
        this.called = true;
        this.onResolve(val);
      }
    };

    const reject = (err) => {
      this.rejected = true;
      this.value = err;
      if (typeof this.onReject === "function" && !this.called) {
        this.called = true;
        this.onReject(err);
      }
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(callback) {
    this.onResolve = callback;
    if (this.fulfilled && !this.called) {
      this.called = true;
      callback(this.value);
    }
    return this;
  }

  catch(callback) {
    this.onReject = callback;
    if (this.rejected && !this.called) {
      this.called = true;
      callback(this.value);
    }
    return this;
  }
}

// Usage of Promise polyfill
const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Task completed successfully!");
    reject("Something went wrong!");
  }, 1000);
});

promise.then((result) => {
    console.log("Resolved:", result);
}).catch((error) => {
    console.error("Rejected:", error);
});
