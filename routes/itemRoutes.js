const express = require("express");
const router = express.Router();
const { createItem, readItem, readAllItems, updateItem, deleteItem, deleteAllItems } = require("../models/itemModel");

// Read all items
router.get("/item", async (req, res) => {
    const item = await readAllItems();
    res.send(item);
});

// Read one item
router.get("/item/:itemId", async (req, res) => {
    const itemId = req.params.itemId;
    const item = await readItem(itemId);
    if (item) {
        res.send(item);
    } else {
        res.status(404).send(`Item with ID ${itemId} not found`);
    }
});

// Create a new item
router.post("/item", async (req, res) => {
    const item = req.body;
    await createItem(item);
    res.send("Item created successfully");
});

// Update a item
router.put("/item/:itemId", async (req, res) => {
    const itemId = req.params.itemId;
    const updateditem = req.body;
    await updateItem(itemId, updateditem);
    res.send("Item updated successfully");
});

// Delete a item
router.delete("/item/:itemId", async (req, res) => {
    const itemId = req.params.itemId;
    await deleteItem(itemId);
    res.send("Item deleted successfully");
});

// Delete all items
router.delete("/item", async (req, res) => {
    await deleteAllItems();
    res.send("All items deleted successfully");
});

module.exports = router;
