require('dotenv').config();

const { MongoClient } = require("mongodb");

class ProductModel {
    uri = process.env.MONGO_URI;
    client;

    async modelEntry(collectionName) {
        let collection;
        try {
            collection = this.connectDB(collectionName);
        } catch (err) {
            throw err;
        }

        let data = await this.getData(collection);
        return data;
    }

    getData(dbCollection) {
        return new Promise((resolve, reject) => {
            dbCollection.find().toArray((err, data) => {
                if (err) throw err;
                resolve(data);
            });
        });
    }

    connectDB(collectionName) {
            this.client = new MongoClient(this.uri);
            const database = this.client.db('burger-shop');
            return database.collection(collectionName);
    }
}

module.exports = {ProductModel}