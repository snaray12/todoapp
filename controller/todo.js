var Todo = require('../models/todo');

var todos = {
	get : function(req, res) {
		console.log('todos controller '+'\t'+req.user.token);
		Todo.find(function(err, todos) {
			if (err)
	            res.send(err);
	        res.json(todos);
		})
	},
	add : function(req, res) {
		Todo.create({
	        text : req.body.text,
	        done : false
	    }, function(err, todo) {
	        if (err)
	            res.send(err);
	        Todo.find(function(err, todos) {
	            if (err)
	                res.send(err)
	            res.json(todos);
	        });
		})
	},
	delete : function(req, res) {
	    Todo.remove({
	        _id : req.params.todo_id
	    }, function(err, todo) {
	        if (err)
	            res.send(err);
	        // get and return all the todos after you create another
	        Todo.find(function(err, todos) {
	            if (err)
	                res.send(err)
	            res.json(todos);
	        });
	    })
	}
};

module.exports = todos