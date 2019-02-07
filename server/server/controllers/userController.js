'use strict';
var _ = require('lodash');
const User = require('../models/userModel.js');

var validationError = function (res, err) {
    return res.json(422, err);
};

// Creates a new user

exports.createUser = function (req, res, next) {
    var newUser = new User(req.body);
    newUser.provider = 'local';
    newUser.role = 'user';
    newUser.save(function (err, user) {
        if (err) return validationError(res, err);
        res.json("added successfully");
    });
};

//Get list of users
 
exports.getUsersDetails = function (req, res) {
    User.find({}, function (err, users) {
        if (err) return res.send(500, err);
        res.json(200, users);
    });
};

// get user by Id

exports.findUserByUserId = function (req, res, next) {
    var userId = req.params.UserId;
    User.findOne({
        "_id": userId
    }, function (err, user) {
        if (err) return next(err);
        if (!user) return res.send(401);
        res.json(user);
    });
};

// delete user

exports.deleteUserDetailsByUserId = function (req, res) {
    User.findByIdAndDelete(req.params.UserId, function (err, user) {
        if (err) return res.send(500, err);
        return res.send(204);
    });
};
exports.deleteUserDetailsByUserId = function (req, res) {
    User.findById(req.params.UserId, function (err, user) {
        if (err) { return handleError(res, err); }
        if (!user) { return res.send(404); }
        user.remove(function (err) {
            if (err) { return handleError(res, err); }
            return res.send(200,"deleted");
        });
    });
};

//update user details

exports.updateUserByUserId = function (req, res) {
    var UserId = req.params.UserId;
    User.findOne({
        "_id": UserId
    },function (err, user) {
        if (err) { return handleError(res, err); }
        if (!user) { return res.send(404); }
        var updated = _.merge(user, req.body);
        updated.save(function (err) {
            if (err) { return handleError(res, err); }
            return res.json(200, user);
        });
    });
};
