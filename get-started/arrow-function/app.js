var deliveryFunction = {

  name: "John",

  handleMessage: (message, handler) => {
    handler(message);
  },

  receive: function() {
    this.handleMessage("Message: ", (message) => {
      console.log(message + this.name);
    })
  }
}

deliveryFunction.receive();
