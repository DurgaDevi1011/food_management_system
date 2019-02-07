'use strict';
var _ = require('lodash');
const Vendor = require('../models/vendorModel.js');

var validationError = function (res, err) {
    return res.json(422, err);
};

var handleError = function handleError(res, err) {
    return res.send(500, err);
}

// Creates a new vendor

exports.createVendor = function (req, res, next) {
    var newVendor = new Vendor(req.body);
    newVendor.role = 'vendor';
    newVendor.save(function (err, vendor) {
        if (err) return validationError(res, err);
        res.json("Vendor added successfully");
    });
};

//Get list of vendors

exports.getVendorsDetails = function (req, res) {
    Vendor.find({}, function (err, vendors) {
        if (err) return res.send(500, err);
        res.json(200, vendors);
    });
};

// get vendor by Id

exports.findVendorByVendorId = function (req, res, next) {
    var RestaruntId = req.params.RestaruntId;
    Vendor.findOne({
        "RestaruntId": RestaruntId
    }, function (err, vendor) {
        if (err) return next(err);
        if (!vendor) return res.send(401);
        res.json(vendor);
    });
};

// delete vendor

exports.deletevendorDetailsByvendorId = function (req, res) {
    Vendor.findByIdAndDelete(req.params.RestaruntId, function (err, vendor) {
        if (err) return res.send(500, err);
        return res.send(204);
    });
};

//update vendor details

exports.updateVendorByVendorId = function (req, res) {
    var RestaruntId = req.params.RestaruntId;
    Vendor.findOne({
        "RestaruntId": RestaruntId
    }, function (err, vendor) {
        if (err) { return handleError(res, err); }
        if (!vendor) { return res.send(404); }
        var updated = _.merge(vendor, req.body);
        updated.save(function (err) {
            if (err) { return handleError(res, err); }
            return res.json(200, vendor);
        });
    });
};

