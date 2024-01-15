// Enter who you are
let who = "Not World";

if (who === "World") {
    console.log("Hello World!")
    // else will cover all cases for which the if condition is not true
} else {
    console.log(`I don't know you, ${who}!`)
}

if (who === "World") {
    console.log("Hello World!")
    // else if will check again, if this first condition was not met
} else if (who === "Moon") {
    console.log("Hello Moon, good to see you around!")
} else {
    console.log(`I don't know you, ${who}!`)
}
