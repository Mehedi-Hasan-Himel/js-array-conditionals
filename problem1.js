// Your given an arrary of fruits

var fruits = [`Apple`, `Banana`, `Orange`];

// a. find the index of `Banana` and replace it with `Mango`;
// b. Remove `Orange` and add `Watermelon`

// Solutions - a
var index = fruits.indexOf(`Banana`);
var mango = (fruits[1] = `Mango`);

console.log("====================================");
console.log(`Index of Banana ` + index + ` and replaced with Mango = ` , fruits);
console.log("====================================");


// Solutions - b
var remove = fruits.pop();
var add = fruits.push(`Watermelon`);

console.log("====================================");
console.log(fruits);
console.log("====================================");
