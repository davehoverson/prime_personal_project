/**
 * Created by davidhoverson on 10/20/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    item: String,
    total: Number,
    actual: {type: Number, default: 0},
    percentage: Number,
    notes: String
});

var categories = mongoose.model('categories', CategorySchema);

module.exports = categories;