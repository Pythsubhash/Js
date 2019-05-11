/* Left to right ::Square Patten 1 to 5 diagonal with star*/
var pattern = function(x){
    outerloop:
    for(i=1; i<=x; i++){
        var str = ' ';
        var counter =0;
        innerloop:
        for(j = 1; j<=x ; j++){
            counter += 1;
            if(i == j){
                str += j;
            } else {
                str +=  "*";
            }
        }
        if(counter == x){
            console.log(str);
        }
    }

}

var output = pattern(5);
console.log(output);