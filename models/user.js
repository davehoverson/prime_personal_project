/**
 * Created by davidhoverson on 10/21/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var userSchema = new Schema({
    local: {
        username: String,
        password: String
    },
    profile: {
        email: String,
        firstname: String,
        lastname: String
    },
    budget:
    {
        month: String,
        year: Number,
        savings: { budgeted: Number, actual: Number },
        retirement: { budgeted: Number, actual: Number }
    }
});

userSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(12), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);

