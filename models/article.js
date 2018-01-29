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

    link : {
        type: String,
        required: true,
        unique: true

    },

    saved: {
        type: Boolean,
        default: false
    },

    note: {

        type: Schema.Types.ObjectId,
        ref:"note"
    }


});


var article = mongoose.model("article",articleSchema);

module.exports = article;