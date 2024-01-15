const bob = {
    name: "Bob",
    email: "bob@sva.de",
    age: 26,
}

const alice = {
    name: "Alice",
    age: 24,
}

function logEmail(person) {
    console.log("Email: " + person.email);
}

logEmail(bob);
// this will print undefined since alice does not have an email yet since she is new at sva 
logEmail(alice);

// how can we prevent this?
// by checking if the given object has the parameter that we want to access
// uncomment the following code

// function logEmail2(person) {
//     if (person.email !== undefined) {
//         console.log("Email: " + person.email);
//     } else {
//         console.log("This person has no Email-Address!");
//     }
// }

// logEmail2(bob);
// logEmail2(alice);