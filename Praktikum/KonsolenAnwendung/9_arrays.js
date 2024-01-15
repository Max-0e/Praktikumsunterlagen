let list = [1, 2, 3];

// getting values from an array via an index
// counterintuitivly an arrays first index is 0 instead of 1
let value = list[0];
console.log("Value at index 0: ");
console.log(value)

// getting length of an array 
let length = list.length;
console.log("Arraylength:");
console.log(length)

// adding values to an array
list.push(4);
console.log("Array after adding Element:");
console.log(list)

// removing values from an array
list.pop()
console.log("Array after removing Element:");
console.log(list)
