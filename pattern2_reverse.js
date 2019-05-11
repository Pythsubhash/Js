var pattern1 = function(x){
    var counter =0;
    outerloop:
    for(i=1;i<=x;i++){
        counter +=1;
        var str ='';
        innerloop:
        for(j=x;j>=i;j--){
            str += j; 
            if(j==i){
                console.log(str);
                break innerloop;
            } 
        }
        if(counter ==x){
            break outerloop;
        }
    }
}

var design = pattern1(5);
console.log(design);