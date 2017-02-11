var mongoose = require('mongoose');
var validator = require('validator');


var User = mongoose.model('User', {
	user: {
		type: String,
		// required: true,
		minlength: 1

	},
	email: {
		type: String,
		minlength: 1,
		trim: true,
		required: true,
		unique: true,
		validate: {
			validator: validator.isEmail,
			message: '{VALUE} is not a valid email'
		}
	},
	password: {
		type: String,
		require: true,
		minlength: 6
	},
	tokens: [{
		access:{
		type: String,
			required: true
		},
		token: {
			type: String,
			required: true
		}
	}]
});


module.exports = {
	User
};
