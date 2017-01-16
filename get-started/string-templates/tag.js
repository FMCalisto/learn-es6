function tag (strings, ...values) {
    if (values[0] <= 19) {
        values[1] = "awake";
        values[2] = "outside";
    } else if (values[0] > 19 && values[0] <= 23) {
        values[1] = "awake";
        values[2] = "home";
    } else {
        values[1] = "sleeping";
        values[2] = "home";
    }

    return `${strings[0]}${values[0]}${strings[1]}${values[1]}${strings[2]}${values[2]}`
}

var message = tag`It's ${new Date().getHours()} I'm ${""} and I'm ${""}`;

console.log(message);