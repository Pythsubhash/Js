
function result(a,b,c){
   console.log(arguments.length);
   arguments[0] = 'subhash';
   console.log(arguments[0] +'  '+a);
   for(i=0;i<=arguments.length;i++) {
       console.log(i +' : '+ arguments[i]);
   }
}

result('20',30,200);

//Rest Parameter

function show(a, ...args) {
    console.log(a);
    console.log(args);
}

show(1,2,3,4,5,6,7);


function show1(a) {
    console.log(a);
    console.log(arguments);
}

show1(1,2,3,4,5,6,7);

function SVG(){
var k = 90;
console.log(k);
}
SVG();
//console.log(k);

if(true) {
    let u =900;
    console.log(u);
}
    //console.log(u);

    r =98;
    console.log(r + ' ' + y);
    var r;
    var y=22;

    var r =98;
    var y;
    console.log(r + ' ' + y);
    y=22;

    var g ="greeky show";
    console.log(g);
    function toshow(){
        console.log(g);
        var g = "subhash singh";
        console.log(g);
    }
    toshow();

    //example hoisted

    var r1= 10;
    console.log(r1 + ':: ' + r2);
    var r2=0;

   function showme(){
        console.log('function call : '+r1);
        //var r1 =98;
    }
  
    //
    function hello(myfunc){
        return myfunc();
    }

    console.log(hello(function(){ return "Welcome again subhash"}));

    //Returning Anonymous function in JavaScript

    function help(a){
        return function(b){
            return a+b;
        }
    }

    console.log(help(10)(20));

    //object litral

    var fee = {};
    fee[0] = 100;
    fee[1]=200;
    fee[2]=300;

    console.log(fee[2]);
    fee.name = 'subhahs';

    console.log(fee.name)

    fee.total = function(){ console.log("Hello How r u"); };
    //fee[total1] = function(){     console.log("YEs I am  good"); };
   // delete fee.total
console.log(fee.total());
//console.log(fee[total1]());

    arr = [];
    arr['methodname'] = function(){ console.log("no one is here"); }
    console.log(arr['methodname']());
    //delete fee.total



    //USE For in loop

    function mobile(){
        this.model = '1109',
        this.price = 2000,
        this.feature = function(){ return "mobile feature is tested "};
    }

    var nokia = new mobile();
    var sony = new   mobile();
    //console.log(nokia.model +"  "+ nokia.price +"  "+ nokia.feature())
    console.log(Object.keys(nokia));
    for (key in nokia){
        console.log(nokia[key] +"<br>");
    }

    const x1 =100;

    if(true){
        const x1 = 300;
        var a1 =001;s
        console.log("x1 :" +x1 +"  : "+a1);
    }
    console.log("x1 :" +x1 +"  : "+a1);


    var tester = "hey hi";

    function newFunction() {
        var hello = "hello";
    }
    console.log(tester+"  : "+hello);

