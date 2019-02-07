'use strict';

var _ = require('lodash');
const User = require('../models/itemsModel.js');

var handleError = function handleError(res, err) {
    return res.send(500, err);
}

// Creates a new Item.
exports.createItems = function (req, res) {
    Item.create(req.body, function (err, item) {
        if (err) { return handleError(res, err); }
        return res.json(201, item);
    });
};
// Get list of Items
exports.getAllItems = function (req, res) {
    Item.find(function (err, items) {
        if (err) { return handleError(res, err); }
        return res.json(200, items);
    });
};

// Get list of Items -getSnacks
exports.getSnacksItems = function (req, res) {
    Item.find({ isSnack: true }, function (err, items) {
        if (err) { return handleError(res, err); }
        return res.json(200, items);
    });
};

// Get list of Items - getDishes
exports.getDishesItems = function (req, res) {
    Item.find({ isSnack: false }, function (err, items) {
        if (err) { return handleError(res, err); }
        return res.json(200, items);
    });
};


// Get a single Item
exports.getItemsById = function (req, res) {
    Item.findById(req.params.ItemId, function (err, item) {
        if (err) { return handleError(res, err); }
        if (!item) { return res.send(404); }
        return res.json(item);
    });
};

// Updates an existing Item.
exports.updateItemsById = function (req, res) {
    Item.findById(req.params.ItemId, function (err, item) {
        if (err) { return handleError(res, err); }
        if (!item) { return res.send(404); }
        var updated = _.merge(item, req.body);
        updated.save(function (err) {
            if (err) { return handleError(res, err); }
            return res.json(200, item);
        });
    });
};

// Deletes an Item.
exports.deleteItemsById = function (req, res) {
    Item.findById(req.params.ItemId, function (err, item) {
        if (err) { return handleError(res, err); }
        if (!item) { return res.send(404); }
        item.remove(function (err) {
            if (err) { return handleError(res, err); }
            return res.send(200,"deleted successfully");
        });
    });
};


