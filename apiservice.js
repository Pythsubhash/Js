var exp = require('express')
//require is a function to take reference of any library
var ptr = exp(); //ptr: function pinter

var mong =require('mongoose')
//mong.connect

//configure mongo database for connectivity
mong.connect("mongodb://127.0.0.1:27017/dump",function(err){
    if(err){
        console.log("issue in connection");
    }
    else 
    {
        console.log("thans.. connected with mongodb");
    }
})



//routing or url
ptr.get('/fetchdata',function(req,res){
res.send('hello from service');

})

ptr.post('/createmembership',function(req,res){
    res.send('hello from service');
  })

ptr.put('/fetchdata',function(req,res){
res.send('hello from service');

    })  





//Hosting
ptr.listen(5200,true) //listen is a function of express for hosting
console.log('server start');
