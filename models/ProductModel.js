require('dotenv').config();

const { MongoClient } = require("mongodb");

class ProductModel {
    uri = process.env.MONGO_URI;
    client;
    burgerResponse = {};
    supplementsResponse = {};

    async getBurgers() {
            this.client = new MongoClient(this.uri);
            const database = this.client.db('burger-shop');
            const burgers = database.collection('burgers');
            await burgers.find().toArray((err, result) => {
                if (err) throw err;
                this.burgerResponse = result;
                this.client.close();
            });
    }

    async getSupplements() {
            this.client = new MongoClient(this.uri);
            const database = this.client.db('burger-shop');
            const supplements = database.collection('supplements');
            await supplements.find().toArray((err, result) => {
                if (err) throw err;
                this.supplementsResponse = result;
                this.client.close();
            });
    }

    getBurgerResponse() {
        return this.burgerResponse;
    }

    getSupplementsResponse() {
        return this.supplementsResponse;
    }
}

module.exports = {ProductModel}