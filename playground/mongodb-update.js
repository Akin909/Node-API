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
//
// db.collection('Todos').findOneAndUpdate({
// _id: new ObjectID("588decebff5df972631f6249")
// },{
// 	$set: {
// 	completed: true	
// 	}
// },{
// 	returnOriginal: false
// }).then((res) => {
// 	console.log(res);	
// })
// //dbclose();
// db.collection('Todos').findOneAndUpdate({
// 	_id: new ObjectID('588db765ff5df972631f52ef')
// },{
// 	$set:{
// 	name: 'Akin'	
// 	}
// },{
// 	returnOriginal: false
// }).then((result) => {
// 	console.log(result)	
// })
// });
db.collection('Todos').findOneAndUpdate({
	_id: new ObjectID('588db765ff5df972631f52ef')
},{
	$inc: {age: 2}
}).then((result) => {
	console.log(result)	
})
});
