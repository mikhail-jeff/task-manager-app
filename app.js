const express = require('express');
const app = express();
const routes = require('./routes/tasks');

const PORT = 3001;

// * middleware
app.use(express.json());

// * routes
app.get('/', (req, res) => {
	res.send(`Task Manager App!`);
});

app.use('/api/v1/tasks', routes);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
