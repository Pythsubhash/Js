var prime = function(x,y){
    outerloop:
    for(i = x; i <= y; i++){
        if(i==1){
            console.log("Prime number series are here below");
        }
        else if(i==2){
            console.log(i + ' '+ "is the Prime number");
        }
        else {
            var counter =0;
            innerloop:
            for(j = 2; j < i; j++){
                if(i % j == 0){
                    counter = 1;
                    break innerloop;
                }      
            }
            if(counter == 0){
                console.log(i +' ' +"is the Prime Number")
            }
        }
    }
}

//var x = prompt("Please enter the start number:" + Number(x));
//var y = prompt("Please enter the start number:" + y);
output = prime(1,20)
console.log(output);