const { MongoClient } = require("mongodb");

class ProductModel {
    uri = "mongodb+srv://admin:burger@cluster0.j7ncion.mongodb.net/test";
    client = new MongoClient(this.uri);
    burgerResponse = {};
    supplementsResponse = {};

    async getBurgers() {
            this.client = new MongoClient(this.uri);
            const database = this.client.db('burger-shop');
            const burgers = database.collection('burgers');
            await burgers.find().toArray((err, result) => {
                this.burgerResponse = result;
                this.client.close();
            });
    }

    async getSupplements() {
        try {
            const database = this.client.db('burger-shop');
            const supplements = database.collection('supplements');
            const query = { burgerName: "Curly Fires" };
            const supplement = await supplements.findOne(query);
            this.supplementsResponse = supplement;
        } finally {
            // Ensures that the client will close when you finish/error
            await this.client.close();
        }
    }

    getBurgerResponse() {
        return this.burgerResponse;
    }

    getSupplementsResponse() {
        return this.supplementsResponse;
    }
}

module.exports = {ProductModel}