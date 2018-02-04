var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    url : {
        type: String,
        required: true,
        unique: true

    },

    saved: {
        type: Boolean,
        default: false
    }


});


var article = mongoose.model("article",articleSchema);

module.exports = article;