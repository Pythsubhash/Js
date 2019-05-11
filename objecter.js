/* work  with objects*/

var person ={
    firstName:"Subhash",
    lastName:"Singh",
    age:28,
    fullName: function(){ 
        return this.firstName +' ' + this.lastName; 
    }
};

console.log(person.fullName());
console.log(person.age);

//Do Not Declare Strings, Numbers, and Booleans as Objects!
//When a JavaScript variable is declared with the keyword "new", the variable is created as an object:

var Numb = new Number();
Numb.one =100;
Numb.two = 200;

console.log(Numb.one);
console.log(Numb.two);

var str = new String();
str.one ="1001";
str.two = "2001";

console.log(str.one);
console.log(str.two);

var bol = new Boolean();
bol.one = 0;
bol.two = 1;

console.log(bol.one);
console.log(bol.two);