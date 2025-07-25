/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise( (resolve) => {
        const start=Date.now();
        while(Date.now() - start<milliseconds)
        {

        }
        resolve();
    });
}

module.exports = sleep;


//EXPLANATION:
//  Line-by-line explanation:
// ✅ return new Promise((resolve) => { ... })
// Creates and returns a Promise, which will be resolved after the desired wait.

// resolve is the function that will mark the promise as finished.

// ✅ const start = Date.now();
// Date.now() gives the current time in milliseconds since January 1, 1970 (UNIX epoch).

// This marks the start time of the wait.

// ✅ while (Date.now() - start < milliseconds)
// This is a busy wait loop:

// It runs continuously and checks if the desired time has passed.

// Date.now() - start measures how much time has elapsed since start.

// Example:
// If you call sleep(2000):

// This loop will run until Date.now() - start >= 2000 (i.e., 2 seconds have passed)

