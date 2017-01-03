function receive (complete) {
  complete();
}

// complete
receive(function () {
  console.log("complete");
});
