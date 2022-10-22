const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');

// * GET ALL Tasks
const getAllTasks = asyncWrapper(async (req, res) => {
	const tasks = await Task.find({});
	// res.status(200).json({ tasks });
	res.status(200).json({ 'Number of tasks left': tasks.length, tasks });
});

// * CREATE Task
const createTask = asyncWrapper(async (req, res) => {
	const task = await Task.create(req.body);
	res.status(201).json({ task });
});

// * GET SINGLE Task
const getTask = asyncWrapper(async (req, res) => {
	const { id: taskID } = req.params;
	const task = await Task.findById({ _id: taskID });

	if (!task) {
		return res.status(404).json({ message: `No task with ID: ${taskID}.` });
	}

	res.status(200).json({ task });
});

// * UPDATE Task
const updateTask = asyncWrapper(async (req, res) => {
	const { id: taskID } = req.params;

	const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, { new: true, runValidators: true });

	if (!task) {
		return res.status(404).json({ message: `No task with ID: ${taskID}.` });
	}

	res.status(200).json({ task });
});

// * DELETE Task
const deleteTask = asyncWrapper(async (req, res) => {
	const { id: taskID } = req.params;
	const task = await Task.findByIdAndDelete({ _id: taskID });

	if (!task) {
		return res.status(404).json({ message: `No task with ID: ${taskID}.` });
	}

	res.status(200).json({ task });
	// res.status(200).json({ task: null, status: `Task with an ID:${taskID} was deleted from the database.` });
});

module.exports = {
	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask,
};
