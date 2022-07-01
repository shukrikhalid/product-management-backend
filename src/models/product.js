var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    quantity: {type: Number, required: true},
});

ProductSchema.set('toJSON', {
    virtuals: true
});

// Export the model
module.exports = mongoose.model('Product', ProductSchema);