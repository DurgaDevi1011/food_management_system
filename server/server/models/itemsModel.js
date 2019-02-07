'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ItemsSchema = new Schema({
    image: String,
    title: String,
    description: String,
    price: { type: Number },
    is_hotel: { type: Boolean, default: false },
    is_snack: { type: Boolean, default: false }
},
    {
        timestamps: true
    });


module.exports = mongoose.model('Items', ItemsSchema);
