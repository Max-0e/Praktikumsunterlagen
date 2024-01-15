let list = [1, 2, 3];


console.log("------------ \n for loop")

// for loop iteration
for (let i = 0; i < list.length; i++) {
    let value = list[i];
    console.log(value);
}


console.log("\n ------------ \n direct enumeration")


// direct enumeration
list.forEach(value => {
    console.log(value);
})


console.log("\n ------------ \n direct enumeration with index")

// direct enumeration with index
list.forEach((value, index) => {
    console.log("Index:" + index);
    console.log("Value:" + value);
})