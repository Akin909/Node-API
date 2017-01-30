var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
	text: {
		type: String,	
		required: true,
		minlength: 1,
		trim: true
	},
	completed:{
		type: Boolean,	
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

var newTodo = new Todo({
	text: 'Cook dinner'
});

newTodo.save().then((doc) => {
	console.log('Saved todo',doc);	
}, (error) => {
	console.log('Unable to save todo') 	
});

var thingsTodo = new Todo({
	text: '  Edit this video'
// 	text: 'Get Paid',
// 	completed: false,
// 	completedAt: 1408
});
thingsTodo.save().then((doc) => {
	console.log('Saved todo: ', doc)	
},(error) => {
	console.log('Unable to save todo ',error);	
});


var User = mongoose.model('User',{
	user: {
		type:String,
		required: true,
		minlength: 1
	
	},
 email:{
	type:String,
		minlength: 1,
		trim: true
	}

}) 

var newUser = new User({
	user: 'Akin So',
	email: 'Akin@example.com'
})

newUser.save().then((user) => {
	console.log(JSON.stringify(user,undefined,2)); 
},(error) => {
	console.log('Unable to save new user: ',error) 	
})
