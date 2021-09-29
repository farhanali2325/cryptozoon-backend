const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
mongoose.connect('mongodb://localhost:27017/cryptozoon-db', { useNewUrlParser: true });
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());


const favRoute = require('./api/routes/favourite');

app.use('/fav', favRoute);

app.use((req, res, next) => {
	const error = new Error('not found');
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message,
		},
	});
});

module.exports = app;