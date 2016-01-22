var mongoose = require('mongoose');
var Question = mongoose.model('questions');
var Answer = mongoose.model('answers');

module.exports = (function(){
	return{
		index:function(req,res){
			Question.find({},function(err,output){
				if(err){
					console.log(err);
				}else{
					res.json(output);
				}
			})
		},
		add:function(req,res){
			var question = new Question(
				{
					username:req.body.username,
					title:req.body.title,
					description:req.body.description,
					num_ans:0,
					created_at:Date()
				});
			question.save(function(err,output){
				if(err){
					console.log(err);
				}else{
					console.log('add question successfully');
					res.json(output);
				}
			})
		},
		show:function(req,res){
			Question.findOne({_id:req.params.id})
				.populate('answers')
				.exec(function(err,output){
					res.json(output);
			})
		},
		update:function(req,res){
			Question.update({_id: req.params.id}, {$inc: { num_ans: 1}}, function(err, output)
			{
				if(err){
					console.log(err);
					res.json({status: 'failed', err: err})
				}else{
					res.json(output);	
				}
			})
		}
	}
})()