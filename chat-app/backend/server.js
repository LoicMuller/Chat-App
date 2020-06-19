const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Set up express
const app = express();
app.use(express.json());
app.use(cors());

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

// Set up mongoose
mongoose.connect(
    process.env.DB_CONNECTION,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    console.log('Connected to DataBase')
);

// Set up routes
app.use("/users", require('./routes/userRouter'));