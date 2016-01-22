var users = require('./../controllers/users.js');
var questions = require('./../controllers/questions.js');
var answers = require('./../controllers/answers.js');

module.exports = function(app){
	//root
	app.get('/',function(req,res){
		res.render('index');
	})
	//add user: check if username exists
	app.post('/addUser',function(req,res){
		users.add(req,res);
	});

	//get all questions
	app.get('/questions',function(req,res){
		questions.index(req,res);
	});

	//get question by id
	app.get('/question/:id',function(req,res){
		questions.show(req,res);//use populate
	});

	//add question
	app.post('/addQuestion',function(req,res){
		questions.add(req,res);
	})

	//update question
	app.post('/updateQuestion/:id',function(req,res){
		questions.update(req,res);
	})

	//add answer to a question id
	app.post('/addAnswer/:id',function(req,res){
		answers.add(req,res);
	})

	//update likes
	app.post('/likes/:id',function(req,res){
		answers.update(req,res);
	})



}

