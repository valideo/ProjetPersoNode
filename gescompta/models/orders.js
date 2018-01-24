var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'Users'},
    nameProduct: {type : String, required: true},
    qtity: {type: Number, required: true},
    price: {type: Number, required: true}
});

module.exports = mongoose.model('Order', schema);