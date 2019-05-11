/* F: Up to Doen ::Stair Patten 1 to 5 */

var downstairPattern = function(x){

    outerloop:
    for(i=x;i>=1;i--){
        var str="";
        var spar = '';
        var counter =0;
        innerloop:
        for(j=1;j<=x;j++){
            counter += 1;
            if(j > i){
                spar += ' ';
            } else {
                str += j;
            }
            if(counter == x){
                console.log(spar + ' ' + str);
               // break innerloop;
            }
        }
        
    }
}

var output =  downstairPattern(5);
console.log(output);