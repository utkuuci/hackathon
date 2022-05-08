// 3rd Party Libs.
var express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
// Node Libs
const path = require('path');
// Routes.
const receiptRoutes = require('./routers/receipt');
const userRoutes = require('./routers/user');
const shopRoutes = require('./routers/shop');
// Database
const db = require('./db');

dotenv.config();
db();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// Protection
app.use(helmet());
// Logging to console
app.use(morgan('tiny'));


app.use("/api/v1/receipt", receiptRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/shop", shopRoutes);
// app.use("/api/v1/product");


// Listen
app.listen(3000);
