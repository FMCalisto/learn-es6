function* greet() {
  console.log(`Called 'next()'`);
  yield "message";
}

let greeter = greet();
console.log(greeter);

let next = greeter.next();
console.log(next);

let done = greeter.next();
console.log(done);
