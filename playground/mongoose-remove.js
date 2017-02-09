const {ObjectID} = require('mongodb');


const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/db/models/todo.js');
const {User} = require('./../server/db/models/user.js');

// Todo.remove({}).then((result) => {
// 	console.log(result);	
// });
//
// Todo.findOneAndRemove()
Todo.findByIdAndRemove('5892457bff5df972631f88e3').then((todo) => {
	console.log(todo);	
})
