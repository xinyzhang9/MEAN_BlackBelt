//model
var mongoose = require('mongoose');
var validate = require('mongoose-validator');

var ansValidator = [
	validate({
		validator: 'isLength',
		arguments: [5],
		message: 'answer title should be at least 5 characters'
	})
];

var Schema = mongoose.Schema;
var AnswerSchema = new mongoose.Schema({
	username:String,
	title:{
		type:String,
		trim:true,
		validate:ansValidator
	},
	description:String,
	_question:{type:Schema.Types.ObjectId,ref:'questions'},
	created_at:Date,
	likes:Number,
});

mongoose.model('answers',AnswerSchema);