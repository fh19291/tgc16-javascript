// JavaScript is very lassire faire when comes it
// to data types
console.log("1" + 1); // In JS, you add string together
                      // so JS will automatically convert
                      // the integer 1 to a string

console.log("1" - 1); // JS will automatically convert the 
                      // "1" to integer

// even if it doesn't crash when we mix
// data types, it is prudent to convert

// Data conversion functions
let number = parseInt("42"); // returns integer 42 from a string
let pi = parseFloat("3.14"); // return float 3.14 from a string
let d = Number("2"); // return integer 2 from a string
let f = Number("3.14"); // return float 3.14 from a string

// Convert to string
let secretOfLife = 42 + ""; // shortest way to convert to string