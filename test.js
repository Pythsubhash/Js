/* Array:: */

var fruits = ['banana','mango','orange','apple',[1,2,3,4],"myfunction(){ console.log('Hello'); }" ]
console.log(typeof(fruits));
fruits.forEach(SimpleVal);
function SimpleVal(value){
    console.log(value);
}

//sim[ple method]

for(i=0; i<=fruits.length ; i++){
    console.log("Array member : " + fruits[i]);
}

//Adding element in the array

//fruits.push('Tree');
//fruits[fruits.length] = 'Monsoon';
//fruits[9] = 'Movies';
atype =fruits.join("*");
console.log(atype);


// Array Methods
/*
push(),pop(),shift(),unshift(),delete(),splice(),concat(),slice()
*/

fruits.splice(2,1,3,4)
//console.log(x);
console.log(fruits);

var sports =['hokey','football','TT','Cricket']
var books = ['The Jungle Book','Comic Book','General Book']
var movie = ['English movie','Hindi Movie','Punjabi movie']
var grouper = sports.concat(books,movie);

//console.log(grouper);
//console.log(sports);

var citrus = sports.slice(1,2);
console.log(citrus);


//Array.forEach(myfunction),map(),filter()

digits = [1,2,3,4,5]
updateddigit = digits.map(myFunction);
function myFunction(value,index,array){
    return value * 2;
    //console.log()
}
console.log(updateddigit);

//filter
Number1 = digits.filter(getGreaterValue);
function getGreaterValue(value){
    return value > 4;
}
console.log(Number1);


//reduce()

number2 = [1,2,3,4,5]
sum =  number2.reduce(getsum);
function getsum(Total,value){
    return Total + value;
}

console.log(sum);

//Array.every(),Array.some(),find()

var number3 = [1,2,3,4,5]
var allOver3 = number3.find(All18);
function All18(value){
    return value >2;
}
console.log(allOver3);

//-------------------------------------------------------------//

