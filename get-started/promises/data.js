var data = new Promise((resolve, reject) => {
  if (true) {
    resolve('RESOLVE');
  } else {
    reject('REJECT');
  }
});

data.then();

data.catch();
