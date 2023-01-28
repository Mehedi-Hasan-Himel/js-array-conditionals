// 1. your given three numbers 13, 79, 45. Write a pogram that will print the largest number using if else statement.

// 2. Your given a triangle with the sides 9,8,9. write a program to check whether a triangle is isosceles of not using if else statement.

// Solution - 1

/*

var a = 103;
var b = 79;
var c = 405;

if (a > b && a > c) {
  console.log(a, `is the largest number`);
} else if (b > a && b > c) {
  console.log(b, `is the largest number`);
} else {
  console.log(c, `is the largest number`);
}

*/

// Solution - 2

var a = 9;
var b = 8;
var c = 9;

if (a == b || a == c || b == c) {
  console.log(`The triangle is isosceles`);
} else {
  console.log(`The triangle isn't isosceles`);
}
