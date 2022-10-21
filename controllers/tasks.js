const Task = require('../models/Task');

// * Get all Tasks
const getAllTasks = async (req, res) => {
	try {
		const tasks = await Task.find({});
		res.status(200).json({ tasks });
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

// * Create Task
const createTask = async (req, res) => {
	try {
		const task = await Task.create(req.body);
		res.status(201).json({ task });
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

// * Get single Task
const getTask = (req, res) => {
	res.json({ id: req.params.id });
};

// * Update Task
const updateTask = (req, res) => {
	res.send('Update Task');
};

// * Delete Task
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
