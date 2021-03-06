const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const storeRoute = require('./routes/stores');
const connectDB = require('./config/db');

//load env vars
dotenv.config({ path: './config/config.env' });

//Connect to DB
connectDB();

const app = express();

//Body parser
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/api/v1/stores', storeRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
