var exp = require("express");
var mjs = require('mongojs');
var app = exp();
var db = mjs('contacts',['contacts']);
var body = require('body-parser');

app.use(exp.static(__dirname+"/public"));
app.use(body.json());
app.get("/contactlist" , function(rq,re){
	console.log("Recieved get req");
	db.contacts.find(function(err,data){
		re.json(data);
	});	
});

app.post('/contactlist',function(rq,re){
	console.log(rq.body);
	db.contacts.insert(rq.body);
});
app.delete('/contactlist/:id',function(rq,re){
	var id = rq.params.id;
	db.contacts.remove({_id: mjs.ObjectId(id)} , function(err,data){
		re.json(data);
	});
});
app.get("/contactlist/:id" , function(req,res){
	var id = req.params.id;
	db.contacts.findOne({_id: mjs.ObjectId(id)} , function(err,data){
		console.log(data);
		res.json(data);
	});
});
app.put('/contactlist/:id' , function(req,res){
	var id = req.params.id
	console.log(req.body.name);
	db.contacts.findAndModify({query: {_id: mjs.ObjectId(id)},req.body},function(err,data){
		res.json(data);
	});
});
app.listen(3000);

console.log("SERVER IS RUNNING");