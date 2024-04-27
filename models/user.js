var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
	
	unique_id: Number,
	username: String,
	email: String,
	password: String,
	passwordConf: String,
	number:Number,
	imageInput: String
}),
User = mongoose.model('User', userSchema);

module.exports = User;