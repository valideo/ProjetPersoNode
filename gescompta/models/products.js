var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	imagePath: {type : String, required: true},
	title: {type : String, required: true},
	description: {type : String, required: true},
	techInformations: {type : String, required: true},
	comInformations: {type : String, required: true},
	price: {type : Number, required: true},
	deleted: {type : Boolean, required: true}
});

module.exports = mongoose.model('Products', schema);