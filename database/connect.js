const mongoose = require('mongoose');

const connection = 'mongodb+srv://jeffmikhail:12345@task-app.tc00svq.mongodb.net/?retryWrites=true&w=majority';

mongoose
	.connect(connection, { useUnifiedTopology: true, useNewUrlParser: true })
	.then(() => console.log('Connected to the database!'))
	.catch((err) => console.log(err));
