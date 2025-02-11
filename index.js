

var  http = require("http")
var fs = require("fs")
var url = require("url")



var server = http.createServer((req,res)=>{


    fs.readFile("index.json",(err,file)=>{
        if(err){
            console.log(err);
            
        }else{
        res.write(file)
            res.end()
        }
    })
    



})



port = 3007

server.listen(port,()=>{
    console.log("server running at" + "http://localhost:" + port);
    
})




