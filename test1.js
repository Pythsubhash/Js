//"use strict";

x=123;
console.log(x);

//Using block Scope
var y=100;
{
  let y=10;

}

//console.log(y);
//var z = y + 1;

var i=5;
for(let i=0; i<10; i++){
    console.log(i);
}
console.log("Outside variable: " +i);

var carName = 'BMW';

//ES6 -new Number method [isInteger(),isSafeInteger()]
//Default parameter,New Number Properties,[Number.isInteger(),Number.isSafeInteger()]
//New Global Method: isFinite(),isNaN()
//Arrow Functions

var a = Number.EPSILON;
var a1 = Number.MIN_SAFE_INTEGER;
var a2 = Number.MAX_SAFE_INTEGER;
console.log(a + ' ' + a1 + ' ' + a2);
 c = Number.isInteger(20);
 //c1 = Number.isSafeInteger(20.012);
 //console.log(c1);

 l1 ={"firstName":"Subhash","lastName":"Singh"}
 l2 = Object.getOwnPropertyDescriptor(l1);
 console.log(l2);



 const app = (x,y) =>x*y;
 var ll = app(2,3);
 console.log(ll);

