var dataVar = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve('RESOLVE');
    } else {
      reject('REJECT');
    }
  }, 2000);
});

dataVar
  .then((data) => console.log('success 1: ', data))
  .then((data) => console.log('success 2: ', data))
  .catch((error) => console.error('error: ', error));
