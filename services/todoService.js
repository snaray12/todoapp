var $ = require('jquery');
var promise = require('es6-promise');
var resourceUrl = "http://localhost:5000/api/todo";

module.exports = {
	addTodo : function(todos){
		var Promise = promise.Promise;
		return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl,
                data: JSON.stringify(todos),
                method: "POST",
                dataType: "json",
                contentType: "application/json",
                success: resolve,
                error: reject
            });
        });
	},

	getTodo : function() {
		var Promise = promise.Promise;
		return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl,
                method: "GET",
                dataType: "json",
                success: resolve,
                error: reject
            });
        });
	},

	deleteTodo : function () {
		var Promise = promise.Promise;
		return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl + "/" + todo._id,
                method: "DELETE",
                dataType: "json",
                success: resolve,
                error: reject
            });
        });
	}
}
