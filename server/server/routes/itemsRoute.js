module.exports = (app) => {
    const items = require('../controllers/itemsController.js');
    // Creates a new Item.
    app.post('/item/', items.createItems);
    // Get list of Items
    app.get('/item/', items.getAllItems);
    // Get a single Item
    app.get('/item/:Itemid', items.getItemsById);
    // Updates an existing Item.
    app.put('/item/:Itemid', items.updateItemsById);
    // Deletes an Item.
    app.delete('/item/:Itemid', items.deleteItemsById);
    // Get list of Items -getSnacks
    app.get('/snacks/', items.getSnacksItems);
    // Get list of Items - getDishes
    app.get('/dishes/', items.getDishesItems);
}