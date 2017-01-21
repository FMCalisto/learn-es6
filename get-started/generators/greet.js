function* greet() {
  console.log(`Called 'next()'`);
}

let greeter = greet();
console.log(greeter);

let next = greeter.next();
console.log(next);
