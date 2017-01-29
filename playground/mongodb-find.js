const {
	MongoClient,
	ObjectID
} = require('mongodb')

const test = require('assert');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
if (error) {
	return console.log('Unable to connect to MongoDB server');
}
console.log('Connected to MongoDB server')

// 	db.collection('Todos').find({
// 		_id: new ObjectID(  "588d4479152a074e1400d56c" )
// 	}).toArray().then( (docs) => {
// 		console.log('Todos');	
// 		console.log(JSON.stringify(docs,undefined,2));
// 	});
//
// 	db.close();
//db.collection('Todos').find().count().then((count) => {
	//console.log(`Todos count: ${count}`);
	//});
// var cursor = db.collection('Users').find();
// cursor.forEach((document) => {
// 	test.ok(document.name !== 'Akin'); 
// 		return console.log(JSON.stringify(document, undefined, 2))
// 	
// }, (err) => {
// 	console.log('Could not find a matching document', err)
// 	db.close();
// });
// });
db.collection('Users').find({name: "Akin So"}).toArray().then((docs) => {
console.log(JSON.stringify(docs,undefined,2)) 	
	});

});
