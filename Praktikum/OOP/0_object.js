const object = {
    name: "Bob",
    email: "bob@sva.de",
    age: 26,
}

// get the values stored in the object by accessing the property
console.log(object.age);
console.log(object['name']);

// this will print undefined since the object has no such value
console.log(object.lastName);