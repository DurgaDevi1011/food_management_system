module.exports = (app) => {
    const vendor = require('../controllers/vendorController.js');

    // Create a new Vendor
    app.post('/vendor', vendor.createVendor);

    // Retrieve all Vendor
    app.get('/vendor', vendor.getVendorsDetails);

    // Retrieve a single Vendor with vendorId
    app.get('/vendor/:RestaruntId', vendor.findVendorByVendorId);

    // Update a vendor with vendorId
    app.put('/vendor/:RestaruntId', vendor.updateVendorByVendorId);

    // Delete a Vendor with vendorId
 //   app.delete('/vendor/vendId', vendor.deleteVendotDetails);
}