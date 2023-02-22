const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const uri = `mongodb+srv://${process.env.MONGO_DB_CONNECTION_STRING}`;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});

const dbname = "items";
const collection_name = "item";
const itemCollection = client.db(dbname).collection(collection_name);

// ------------------ CRUD ------------------ //

// Read all items
const readAllItems = async () => {
    try {
        await client.connect();
        const cursor = itemCollection.find();
        const results = await cursor.toArray();
        if (results.length > 0) {
            console.log("Found the following listings:");
            console.log(results);
        } else {
            console.log("No listings found!");
        }
        return results;
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
};

// Read a single item
const readItem = async (itemId) => {
    try {
        await client.connect();
        // If using Node.js, use `new ObjectId(itemId)`
        const result = await itemCollection.findOne({ _id: new ObjectId(itemId) });
        if (result) {
            console.log(`Found a listing in the collection with the id: ${itemId}`);
            console.log(result);
        } else {
            console.log(`No listings found with the id: ${itemId}`);
        }
        return result;
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
};

// Create a new item
const createItem = async (item) => {
    try {
        await client.connect(); // Connect to the MongoDB cluster
        const result = await itemCollection.insertOne(item); // Insert a single document, wait for promise so we can read it back
        console.log(`New listing created with the following id: ${result.insertedId}`);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
};

// Update a single item
const updateItem = async (itemId, updatedItem) => {
    try {
        await client.connect();
        const result = await itemCollection.updateOne({ _id: new ObjectId(itemId) }, { $set: updatedItem });
        console.log(`${result.matchedCount} document(s) matched the query criteria.`);
        console.log(`${result.modifiedCount} document(s) was/were updated.`);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
};

// Delete a single item
const deleteItem = async (itemId) => {
    try {
        await client.connect();
        const result = await itemCollection.deleteOne({ _id: new ObjectId(itemId) });
        console.log(`${result.deletedCount} document(s) was/were deleted.`);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
};

// Delete all items
const deleteAllItems = async () => {
    try {
        await client.connect();
        const result = await itemCollection.deleteMany({});
        console.log(`${result.deletedCount} document(s) was/were deleted.`);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
};

module.exports = {
    createItem,
    readAllItems,
    readItem,
    updateItem,
    deleteItem,
    deleteAllItems,
};
