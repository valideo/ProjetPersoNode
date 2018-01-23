var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	imagePath: {type : String, required: true},
	title: {type : String, required: true},
	description: {type : String, required: true},
	informations: {type : String, required: true},
	price: {type : Number, required: true},
	imagePath: {type : String, required: true},
	deleted: {type : Boolean, required: true},




});
