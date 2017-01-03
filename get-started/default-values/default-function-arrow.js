let receive = (complete = () => console.log("complete")) => complete()

// complete
receive();
