const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8080;

const burgerRoutes = require("./Routes");
app.use("/", burgerRoutes);

app.listen(port, () => {
    console.log(`Success! Server is running on port ${port}`);
})