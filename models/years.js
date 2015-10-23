/**
 * Created by davidhoverson on 10/22/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var YearSchema = new Schema({
    _id: Number,
    year: Number
});

var years = mongoose.model('years', YearSchema);

module.exports = years;