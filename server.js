var express = require("express");

var app = express();


app.use(function(rq,re){
	re.writeHead(200 , {'Content-Type' : 'text/html'});
	re.end('<h1>Hello</h1>');
});
app.listen(3000,'localhost');
console.log('Server is Running');