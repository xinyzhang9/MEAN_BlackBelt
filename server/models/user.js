//model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
	username:String,
});

mongoose.model('users',UserSchema);