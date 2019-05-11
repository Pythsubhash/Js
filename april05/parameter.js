//spreaad

var a1 = [1,2,3];
var combined = [...a1,4,5];
console.log(combined);

const a2 = {
    k1:'company',
    K2:'name',
    K3:'age'
};
const combined2 = [{...a2}, 'salary:salary', 'joining:22'];
console.log(combined2)

const combined3 = {...a1, key:'01', val:'002'};
console.log(combined3);




//Reducer
/*
prev = 0,next = 1  return =1
prev = 1,next = 2  return = 3
prev =3 , next = 3  return = 6
prev = 6, next = 4  return = 10
*/
var arr1 = [1,2,3,4]  //get sum 
var flattedArray = arr1.reduce(function(prev,next){
    return prev+next;
},0)   
console.log(flattedArray)

var farra = [[1,2,3], [4,5,6]]
var sarr = farra.reduce((prev,next)=>{
    return prev.concat(next)
}, [])

console.log(sarr);

//map

var arrmap = [1,2,3]

var ar = arrmap.map(x=>{
    return y = ""+ x +"";
})
//.filter(y=>{
//    return y>4;
//})
console.log(ar.toString())

