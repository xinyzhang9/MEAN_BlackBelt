//model
var mongoose = require('mongoose');
var validate = require('mongoose-validator');
var questionValidator = [
	validate({
		validator: 'isLength',
		arguments: [10],
		message: 'question title should be at least 10 characters'
	})
];
var Schema = mongoose.Schema;
var QuestionSchema = new mongoose.Schema({
	username:String,
	title:{
		type:String,
		trim:true,
		validate:questionValidator
	},
	description:String,
	answers:[{type:Schema.Types.ObjectId,
				ref: 'answers'}],
	created_at:Date,
	num_ans:Number
});

mongoose.model('questions',QuestionSchema);