var dataVar = new Promise((resolve, reject) => {
  if (true) {
    resolve('RESOLVE');
  } else {
    reject('REJECT');
  }
});

dataVar.then((data) => console.log('success: ', data));

dataVar.catch((error) => console.log('success: ', error));
