const {ObjectID} = require('mongodb');


const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/db/models/todo.js');
const {User} = require('./../server/db/models/user.js');

var userId = '588f55aef0cd5d780fcbc2ac'
// var id = '5890ce55579c35f57e19e57c'
//
// if (!ObjectID.isValid(id)) {
// 	console.log('ID not valid'); 	
// }
	// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos',todos); 	
// })
//
// Todo.findOne({
// 	_id: id
// }).then((todos) => {
// 	console.log('Find One',todos); 	
// });
//
// Todo.findById(id).then((todos) => {
// 	if (!todos) {
// 		return console.log('ID not found'); 	
// 	}
// 	console.log('Todo by ID',todos); 	
// }).catch((e) => console.log(e));

User.findById(userId).then((user) => {
	if (!user) {
		return console.log('User not found'); 	
	}	
	console.log('User',JSON.stringify(user,undefined,2)); 
}, (error)=>{
console.log(error)
});
