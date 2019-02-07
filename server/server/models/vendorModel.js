'use strict';

const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const VendorSchema = mongoose.Schema({
    restarunt_id: String,
    iestarunt_name: String,
    description: String,
    address: String,
    contact_number: String,
    gsd_id: String,
    audit_user: String,
    active_status: Boolean,
}, {
        timestamps: true
    });

module.exports = mongoose.model('Vendor', VendorSchema);