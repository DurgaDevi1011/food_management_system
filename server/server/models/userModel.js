'use strict';

const mongoose = require('mongoose');
var Schema = mongoose.Schema;   
var UserSchema = new Schema({
    name: String,
    email_address: { type: String, lowercase: true },
    contact_number: String,
    role: {
        type: String,
        default: 'user'
    },
    audit_user: String,
    active_status: Boolean,
}, {
        timestamps: true
    });

module.exports = mongoose.model('User', UserSchema);