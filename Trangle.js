/* E: Right to Left ::Stair Patten 1 to 5 */

var stairPattern = function(x){

    outerloop:
    for(i=1;i<=x;i++){
        var str="";
        var lnum ="";
        var counter =0;
        innerloop:
        for(j=x;j>=-5;j--){
            counter += 1;
            if(j <= i){
                lnum = j +lnum;
                //str += l ;
            } else {
                str += ' ' ;
            }
            if(counter == x){
                console.log(str + ' ' + lnum );
                break innerloop;
            }
        }
        
    }
}

var output =  stairPattern(5);
console.log(output);