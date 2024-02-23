
      // Original asynchronous function
      async function asyncFunction() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve("Promise Operation completed");
          }, 1000);
        });
      }

      // Converting asynchronous function to return a promise
      function convertToPromise() {
        return new Promise((resolve, reject) => {
          asyncFunction()
            .then((result) => {
              resolve(result);
            })
            .catch((error) => {
              reject(error);
            });
        });
      }

      // Example usage
      convertToPromise()
        .then((result) => {
          document.write(result); // Output: Async operation completed
        })
        .catch((error) => {
          console.error(error);
        });
  
