const bob = {
    name: "Bob",
    email: "bob@sva.de",
    age: 26,
    // this is a property but instead of a value it contains a function
    // this is a lambda function, so that we can define and store the function like a property without needing the function keyword
    saySomething: () => {
        console.log("something")
    },
    // notice that we cannot use values from within our object so we have to use Bobs-Name as a plain string
    // we'll cover soon what we can do to change this
    greet: (name) => {
        console.log(`Hello ${name}, i am Bob!`)
    }
}

bob.saySomething();
bob.greet("Max");

// this would throw an error since the method 'sayHelloWorld' is not defined
// bob.sayHelloWorld();