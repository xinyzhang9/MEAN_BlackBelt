var mongoose = require('mongoose');
var User = mongoose.model('users');
module.exports = (function(){
	return{
		add:function(req,res){
			var name = req.body.username;
			var userlist = [];
			User.find({username:name},function(err,output){
				if(err){
					console.log(err);
				}else{
					userlist = output;
				}
			})
			if(userlist.length == 0){//user not exist
				var user = new User({username:name});
				user.save(function(err,output){
					if(err){
						console.log(err);
					}else{
						console.log('add successfully');
						res.json(output);
					}
				})
			}else{//user exists
				alert('welcome back '+name);
				res.redirect('/');
			}
		},
	}
})()