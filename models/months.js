/**
 * Created by davidhoverson on 10/22/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var monthSchema = new Schema({
    _id: Number,
    month: String
});

var months = mongoose.model('months', monthSchema);

module.exports = months;
