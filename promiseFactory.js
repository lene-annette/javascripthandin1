let promiseFactory = function(msg,delay) {
    return new Promise((resolve, reject)=> {
      setTimeout(()=> { //To demonstrate an async call
        var ok = true;  // simulates the result of the operation
        if (ok) {
          resolve(msg.toUpperCase());
        }
        else {
          reject("UPPPPs");
        }
      }, delay);
    });
  };
  module.exports = promiseFactory;
  