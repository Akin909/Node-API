var mongoose = require('mongoose');
var validator = require('validator');
var jwt = require ('jsonwebtoken')
const _ = require('lodash');

var UserSchema =  new mongoose.Schema({

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

UserSchema.methods.generateAuthToken = function() {
	var user = this;	
	var access = 'auth';
	var token = jwt.sign({_id: user._id.toHexString(),access},'secretValue').toString();
	user.tokens.push({access,token});

	return user.save().then(() => {
		return token;
	})
} 

UserSchema.methods.toJSON = function() {
	var user = this;	
	var userObject = user.toObject();

	return _.pick(userObject,['_id','email'])
}
UserSchema.statics.findByToken = function(token) {
	var User = this;	
	var decoded;
try {
	decoded = jwt.verify(token,'secretValue');
} catch (err) {
	return Promise.reject();
}
return User.findOne({
	_id: decoded._id,
	'tokens.token': token,
	'tokens.access': 'auth'
})
}
var User = mongoose.model('User', UserSchema);


module.exports = {
	User
};
