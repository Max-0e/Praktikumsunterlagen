let hello = "Hello ";
let exclamation = "!";
console.log(hello + "Anton" + exclamation);
console.log(hello + "Bilbo" + exclamation);
console.log(hello + "Cedric" + exclamation);
console.log(hello + "Daniel" + exclamation);


// with a function
function SayHello(name) {
    console.log("Hello " + name + "!");
}

SayHello("Anton");
SayHello("Bilbo");
SayHello("Cedric");
SayHello("Daniel");

// functions can be declared in another way
// this is called a lambda function and thinks of the function more like a value
// why could this be useful? 
const SayHello2 = (name) => {
    console.log("Hello " + name + "!");
}