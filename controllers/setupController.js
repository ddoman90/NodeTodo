var Todos = require('../models/todoModel');

module.exports = function(app) {

	app.get('/api/setupTodos', function(req, res) {
		console.log('start');
		var starterTodos = [
			{
				username: 'test',
				todo: 'Buy milk',
				isDone: false,
				hasAttachment: false
			},
			{
				username: 'test',
				todo: 'Feed Dog',
				isDone: false,
				hasAttachment: false
			},
			{
				username: 'test',
				todo: 'Learn node',
				isDone: false,
				hasAttachment: false
			},
			{
				username: 'test',
				todo: 'Eat Dinner',
				isDone: false,
				hasAttachment: false
			}
		];
		Todos.create(starterTodos, function(err, results) {
			res.send(results);
		});
	})
};