const express = require("express");
const connectDB = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();


connectDB();
const app = express();



const port = process.env.PORT || 8000;

app.use(express.json());
app.use('/api/contacts', require("./routes/contactsRoutes"));
app.use('/api/users', require("./routes/userRoutes"));
app.use(errorHandler);

app.listen (port , () => {
    console.log(`Server is now listening on port ${port}`)
});



