var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {ObjectID} = require ('mongodb');

var {Todo} = require('./db/models/todo.js');
var {User} = require('./db/models/user.js');

var app = express();
var port = process.env.PORT || 3000;

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

app.delete('/todos/:id',(req,res) => {
	//get the id
	var id = req.params.id;
	//validate the the id if not valid? return 404
	if (!ObjectID.isValid( id )) {
		return res.status(404).send()	
	}
	//remove the todo by id
	Todo.findByIdAndRemove(id).then((todo) => {
		if (!todo) {
			//if no todo send a 404
			res.status(404).send()	
		}	
		//If todo send a 200 and the todo
		res.status(200).send(todo);
		}).catch((e) => {
		res.status(404).send()	
		})	
})	


app.listen(port, () => {
	console.log(`Server up on port ${port}`); 	
})

module.exports = {app}; 

