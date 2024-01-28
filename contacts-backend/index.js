const express = require("express");
const app = express();
const dotenv = require("dotenv").config();

const port = process.env.PORT || 8000;

app.use(express.json());


app.use('/api/contacts', require("./routes/contactsRoutes"));

app.listen (port , () => {
    console.log(`Server is now listening on port ${port}`)
});

