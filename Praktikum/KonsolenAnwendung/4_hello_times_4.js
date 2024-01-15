// How not to do it
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");

// How to do it
// How often should we do this
let repetitions = 4;

// initial value of our iterativ value; contition on when to end the loop; change to iterativ value after every loop-run (i++ <=> i = i+1 <=> i += 1)
for (let i = 0; i >= repetitions; i++) {
    // ` are used to "interpolate" strings, interpolation means merging variable-value and fixed string parts in a template
    console.log(`${i}. Hello World!`);
}