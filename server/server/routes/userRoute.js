module.exports = (app) => {
    const vendor = require('../controllers/userController.js');

    // Create a new Vendor
    app.post('/user', vendor.createUser);

    // Retrieve all Vendor
    app.get('/user', vendor.getUsersDetails);

    // Retrieve a single Vendor with vendorId
    app.get('/user/:UserId', vendor.findUserByUserId);

    // Update a vendor with vendorId
    app.put('/user/:UserId', vendor.updateUserByUserId);

    // Delete a Vendor with vendorId
   app.delete('/user/:UserId', vendor.deleteUserDetailsByUserId);
}