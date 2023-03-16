// Poylfill for setInterval()
import createSetTimeout from "./setTimeout.js";

function createInterval() {
    var intervalId = 1;
    var intervalMap = {};
    var {setTimeoutPloy, clearTimeoutPoly} = createSetTimeout();

    function setIntervalPoly (callback, delay, ...args) {
        var id = intervalId++;
        function reiterate() {
            intervalMap[id] = setTimeoutPloy(function() {
                callback.apply(this, args);
                if (intervalMap[id]) {
                    reiterate();
                }
            }, delay);
        }
        reiterate();
        return id;
    }

    function clearIntervalPoly(id) {
        clearTimeoutPoly(id);
        delete intervalMap[id];
    }
    return {setIntervalPoly, clearIntervalPoly};
}

var {setIntervalPoly, clearIntervalPoly} = createInterval();

var counter = 0;

var myId = setIntervalPoly(function() {
    console.log("This will run after every 1 sec");
    counter++;

    if (counter >= 2) clearIntervalPoly(myId);
}, 1000);