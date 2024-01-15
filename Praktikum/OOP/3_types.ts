// to execute this code you will need the ts-node transpiler
// install by running 'npm install -g ts-node' and 'npm install -g typescript'

type Person = {
    name: string;
    email: string;
    age: number;
};

const Bob: Person = {
    name: "Bob",
    email: "bob@sva.de",
    age: 26,
}

// this will already be highlighted as an error since person has to have an email
// const Alice :Person = {
//     name: "Alice",
//     age: 24,
// }

// with the type in place we make sure, that the object passed into the function has the propery that we expect
function logEmailWithType(person: Person) {
    console.log(person.email);
    // this will also be highlighted as an error, since the person type has no such property as 'phoneNumber'
    // console.log(person.phoneNumber);
}

logEmailWithType(Bob);