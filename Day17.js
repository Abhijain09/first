//ES6 JAVA SCRIPT
let imLet = "hello let";
// let is similir to te Var keyword except it  is a block scope  variable

const abj = "gfdsafsdasf"; //it is use for constant


console.log("VAR");
var num = 10;
console.log(num); //10
if (num == 10) {
    var num = 20;
    console.log(num); //20
}
console.log(num); //20  
if (num === 10) {
    var num = 30;
    console.log(num);
}
console.log(num); //20



console.log("LET");
let num1 = 10;
console.log(num1); //10
if (num1 == 10) {
    let num1 = 20;
    console.log(num1); //20
}
console.log(num1); //10  
if (num1 === 10) {
    let num1 = 30;
    console.log(num1); // 30
}
console.log(num1); //10




const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [...array1, 9, 10];
console.log(array2);



//Template Literal
let simpleString = "this   is a simple string";
let templit = `this    is
tamplate literal`;
console.log("noramlString =" + simpleString);
console.log("template" + templit + "literal=");
console.log(`template ${templit} litearl=`);