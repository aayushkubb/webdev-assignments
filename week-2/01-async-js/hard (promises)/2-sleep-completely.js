/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(ms) {
    return new Promise(resolve => {
      const end = Date.now() + ms;
      while (Date.now() < end) continue;
      resolve();
    });
  }

module.exports = sleep;
// sleep(5000).then(function(){
//     console.log("Hello");
//   });
// console.log("World");
