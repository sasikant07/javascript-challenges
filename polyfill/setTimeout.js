// polyfill for setInterval

 function createSetTimeout() {
    var timerId = 0;
    var timerMap = {};

    function setTimeoutPloy(callback, delay, ...args) {  // here ...args can be used as param for setTimeout function and optional
        var id = timerId++;
        timerMap[id] = true;

        var start = Date.now();

        function triggerCallback() {
            if (!timerMap[id]) return;

            if (Date.now() > start + delay) {
                callback.apply(this, args);
                // callback()  // this is for normal setTimeout without paramas i.e ...args
            } else {
                requestIdleCallback(triggerCallback);  // learn about window.requestIdCallback method in MDN
            }
        }
        requestIdleCallback(triggerCallback);
        return id;
    }

    function clearTimeoutPoly(id) {
        delete timerMap[id];
    }
    return {setTimeoutPloy, clearTimeoutPoly};
 }

 var {setTimeoutPloy, clearTimeoutPoly} = createSetTimeout();

 console.log("Start");

//  var myId = setTimeoutPloy(function() {                // normal settimeout()
//     console.log("Congratulations You are hired!");
//  }, 3000);

 var myId = setTimeoutPloy(function(name) {                // settimeout() with params
    console.log("Congratulations You are hired!");
    console.log("Welcome to Visa! ",name);
 }, 3000, "Sasikant");

 console.log("End");


 // Output

//  "Start"     ---- normal setTimeout
// "End"
// "Congratulations You are hired!"

// "Start"          --- setTimeout with ...args
// "End"
// "Congratulations You are hired!"
// "Welcome to Visa! Sasikant"


export default createSetTimeout;