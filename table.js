var table = function(a,b){
    counter =a;
    while(counter <=b){
        var innercounter =1;
        while(innercounter <= 10){
            var output = counter * innercounter;
            console.log(counter + " * " + innercounter + " = " + output);
            innercounter++;
        }
        console.log("----------------------");
        counter++;
    }

}

var tbl = table(2,10)
console.log(tbl);