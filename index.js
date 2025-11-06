// import package section
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
// import package section

// import connections files
const { router } = require('./routes')
// import connections files


// this global .env config
dotenv.config();
// this global .env config


// this is port value
const PORT = process.env.PORT || 3000;
// this is port value


// this is mongo database
mongoose.connect(process.env.MONGO_URI)
// this is mongo database

// rest api
app.use('/api', router)
// rest api

// run app
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
// run app