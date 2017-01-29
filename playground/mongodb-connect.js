// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')




MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
	if (error) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server')

	// 	db.collection('Todos').insertOne({
	// 		text: 'Something to do',
	// 		completed: false
	// 	},(err,result) => {
	// 		if (err) {
	// 		return console.log('Unable to insert todo', err)	
	// 		}	
	//
	// 		console.log(JSON.stringify(result.ops, undefined, 2))
	// 	})

	db.collection('Users').insertOne({
		name: 'Akin So',
		age: 26,
		location: 'london'

	}, (err, res) => {
		if (err) {
			return console.log('Unable to insert collection', err)
		}
// console.log(JSON.stringify(res.ops[0], undefined, 2)
console.log(res.ops[0]._id.getTimestamp())
	})

	db.close();
});
