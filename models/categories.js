/**
 * Created by davidhoverson on 10/20/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({

});

var categories = mongoose.model('categories', CategorySchema);

module.exports = categories;