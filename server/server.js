var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {ObjectID} = require ('mongodb');

var {Todo} = require('./db/models/todo.js');
var {User} = require('./db/models/user.js');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=> {
	console.log(req.body); 
	var todo = new Todo({
		text: req.body.text	
	});
	todo.save().then((doc) => {
		res.send(doc);	
	}, (err) => {
		res.status(400).send(err);	
	})
});

app.get('/todos', (req,res) => {
	Todo.find().then((todos) => {
		res.send({todos});	
	},(e) => {
		res.status(400).send(e)	
	});		
})

app.get('/todos/:id', function(req, res){

	var id = req.params.id;
console.log(ObjectID.isValid(id)) 
	if (!ObjectID.isValid(id)) {
	return	res.status(404).send();
	}
	Todo.findById(id).then((todo) => {
		if (!todo) {
			res.status(404).send();
		}
		res.send({todo});	
	}).catch((err) => res.status(400).send())
});



app.listen(3000, () => {
	console.log('Server up on port 3000'); 	
})

module.exports = {app}; 

