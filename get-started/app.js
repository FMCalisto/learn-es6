var deliveryBoy = {
    
    name: "John",

    handleMessage: function (message, handle) {
        hendler(message);
    },

    receive: function() {
        var that = this;

        this.handleMessage("Message: ", function (message) {
            that.name; //get the proper name

            console.log(message + that.name);
        })
    }

}

deliveryBoy.receive();