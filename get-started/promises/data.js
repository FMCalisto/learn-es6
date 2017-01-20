var dataVar = new Promise((resolve, reject) => {
  if (false) {
    resolve('RESOLVE');
  } else {
    reject('REJECT');
  }
});

dataVar.then((data) => console.log('success: ', data));

dataVar.catch((error) => console.error('error: ', error));
