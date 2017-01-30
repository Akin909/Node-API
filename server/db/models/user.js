var mongoose = require('mongoose');

var User = mongoose.model('User',{
	user: {
		type:String,
		required: true,
		minlength: 1
	
	},
 email:{
	type:String,
		minlength: 1,
		trim: true,
		required: true
	}

}) 
module.exports = {User};
