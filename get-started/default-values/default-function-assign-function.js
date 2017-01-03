function receive (complete = function () {
  console.log("complete");
}) {
  complete();
}

// complete
receive();
