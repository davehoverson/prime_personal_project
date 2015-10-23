/**
 * Created by davidhoverson on 10/22/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MonthSchema = new Schema({
    _id: Number,
    month: String
});

var months = mongoose.model('months', MonthSchema);

module.exports = months;
