const getAllTasks = (req, res) => {
	res.send('Get all Task');
};

const createTask = (req, res) => {
	res.send('Create Task');
};

const getTask = (req, res) => {
	res.send('Get Task');
};

const updateTask = (req, res) => {
	res.send('Update Task');
};

const deleteTask = (req, res) => {
	res.send('Delete Task');
};

module.exports = {
	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask,
};
