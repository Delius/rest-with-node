var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var conditionModel = new Schema({
    name: { type: String },
    author: { type: String },
    filled: { type: Boolean, default:false }
});

module.exports = mongoose.model('Condition', conditionModel);