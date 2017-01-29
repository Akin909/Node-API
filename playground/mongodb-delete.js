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

//deleteMany
// db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
// 	console.log(result);	
// });
//deleteOne
// db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
// 	console.log(result);	
// })
//findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
// console.log(res);	
// })
// db.collection('Todos').deleteMany({name: 'Akin'}).then((res) => {
// 	console.log(res);	
// })
db.collection('Todos').findOneAndDelete({_id: new ObjectID('588de1b5ff5df972631f5fc5')}).then((res) => {
	console.log(res);	
})
//dbclose();
});
