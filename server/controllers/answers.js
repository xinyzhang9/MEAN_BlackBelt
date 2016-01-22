var mongoose = require('mongoose');
var Answer = mongoose.model('answers');
var Question = mongoose.model('questions');
module.exports = (function(){
	return{
		add:function(req,res){
			Question.findOne({_id:req.params.id},function(err,question){
				var answer = new Answer(
				{
					username:req.body.username,
					title:req.body.title,
					description:req.body.description,
					likes:0,
					created_at:Date()
				});
				answer._question = question._id; //objectId
				question.answers.push(answer);
				answer.save(function(err){
					question.save(function(err){
						if(err){
							console.log('failed to save answers...');
						}else{
							res.json({status:'success'});
						}
					})
				})
			})
		},
		update:function(req,res){
			Answer.update({_id: req.params.id}, {$inc: { likes: 1}}, function(err, output)
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