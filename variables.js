/*  Work with variables in js  
    Check the implicit parsing of variable, if var type is not number.
    in 90% cases ,Implecit casting is done in js,for noly 10% cases we need to explicitly implement casting.
*/
//Add two variables
var x ="100";
var y = 20;


var z = Number(x) + y;
var z1 = parseInt(x) + y;
var z2 = x + y;   //Only in case of add -implecitly parsing datatype not implemented
console.log(z)
console.log(z1)
console.log(z2)

//Multiply
var m = Number(x) * y;
var m1 = parseInt(x) * y;
var m2 = x * y;
console.log(m)
console.log(m1)
console.log(m2)

//Divide
var d = Number(x) / y;
var d1 = parseInt(x) / y;
var d2 = x / y;
console.log(d)
console.log(d1)
console.log(d2)

//Subtraction
var s = Number(x) - y;
var s1 = parseInt(x) - y;
var s2 = x - y;
console.log(s)
console.log(s1)
console.log(s2)

//Mode
var p = Number(x) % y;
var p1 = parseInt(x) % y;
var p2 = x % y;
console.log(p)
console.log(p1)
console.log(p2)

//Example of variables
m ="4"+2+3;
console.log(m)

m1 = 2 + 2 + "3" + 5;
console.log(m1);