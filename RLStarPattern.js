/* D: Right to Left ::Square Patten 5 to 1 diagonal with star*/
var pattern = function(x){
    outerloop:
    for(i=x; i>=1; i--){
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