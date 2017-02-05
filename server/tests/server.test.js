var expect = require('expect');
var request = require('supertest');
var {
	ObjectID
} = require('mongodb')

var {
	app
} = require('./../server');
var {
	Todo
} = require('./../db/models/todo.js');

const todos = [{
	_id: new ObjectID(),
	text: 'first test todo',
}, {
	_id: new ObjectID(),
	text: 'second test todo'
}];


beforeEach((done) => {
	Todo.remove({}).then(() => {
		Todo.insertMany(todos);
	}).then(() => done())
})

describe('POST /todos', () => {
	it('Should create a new todo', (done) => {
		var text = 'Test todo text';

		request(app)
			.post('/todos')
			.send({
				text
			})
			.expect(200)
			.expect((res) => {
				expect(res.body.text).toBe(text);
			})
			.end((err, res) => {
				if (err) {
					return done(err);
				}


				Todo.find({
					text
				}).then((todos) => {
					expect(todos.length).toBe(1);
					expect(todos[0].text).toBe(text);
					done();
				}).catch((e) => done(e));
			});
	});

	it('should not create todo with invalid body data', (done) => {
		request(app)
			.post('/todos')
			.send()
			.expect(400)
			.end((err, res) => {
				if (err) {
					return done(err);
				}

				Todo.find().then((todos) => {
					expect(todos.length).toBe(2);
					done();

				}).catch((e) => done(e));
			})
	})


});


describe('GET /todos', () => {
	it('should get all todos', (done) => {
		request(app)
			.get('/todos')
			.expect(200)
			.expect((res) => {
				expect(res.body.todos.length).toBe(2);
			})
			.end(done);
	});
});

describe('GET /todos/:id', () => {
	it('should return todo doc', (done) => {
		request(app)
			.get(`/todos/${todos[0]._id.toHexString()}`)
			.expect(200)
			.expect((res) => {
				expect(res.body.todo.text).toBe(todos[0].text);
			console.log(JSON.stringify(res.body.todo,undefined,2))
			})
			.end(done);
	})
	it('should return 404 if todo not found', (done) => {
		//should return a 404
		request(app)
			.get(`/todos/${new ObjectID().toHexString()}`)
			.expect(404)
			.end(done)
	})
	it('should return 404 for non-object ids', (done) => {
		request(app)
			.get(`/todos/123`)
			.expect(404)
			.end(done)
	})
})

describe('DELETE /todos/:id', () => {
	it('should remove a todo', (done) => {
			var hexId = todos[1]._id.toHexString();
	request(app)	
			.delete(`/todos/${hexId}`)
			.expect(200)
			.expect((res) => {
				expect(res.body.todo._id).toBe(hexId);
			})
			.end((err,res) => {
				if (err) {
					return done(err);
				}
				console.log(res.body.todo);
				done();
			})
})
		// 	it('should return 404 if todo not found',(done) => {
		//
		// 	})
		// 	it('should return 404 if object id is invalid', (done) => {
		// 		
		// 	})
});
