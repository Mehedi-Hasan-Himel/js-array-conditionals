
var myScore = 85;
var TomScore = 66;
var JeanScore = 95;
var PeterScore = 56;
var JhonScore = 40;

var result = 39

// conditions
// 80 or avobe A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less F grade

if (result >= 80) {
   console.log(`Your Result is A Grade`);
} else if (result >= 60) {
   console.log(`Your Result is B Grade`);
}
else if (result >= 50) {
   console.log(`Your Result is C Grade`);
} else if (result >= 40) {
   console.log(`Your Result is D Grade`);
}
else if(result <= 39) {
   console.log(`Your Result is F Grade`);
}