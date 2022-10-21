const express = require('express');
const app = express();
const routes = require('./routes/tasks');

const connectDB = require('./database/connect');
require('dotenv').config();

const PORT = 3001;

// * middleware
app.use(express.static('./public'));
app.use(express.json());

// * routes

app.use('/api/v1/tasks', routes);

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
	} catch (error) {
		console.log(error);
	}
};

start();
