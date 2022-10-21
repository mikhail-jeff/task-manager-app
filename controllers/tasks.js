const Task = require('../models/Task');

// * GET ALL Tasks
const getAllTasks = async (req, res) => {
	try {
		const tasks = await Task.find({});
		res.status(200).json({ tasks });
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

// * CREATE Task
const createTask = async (req, res) => {
	try {
		const task = await Task.create(req.body);
		res.status(201).json({ task });
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

// * GET SINGLE Task
const getTask = async (req, res) => {
	try {
		const { id: taskID } = req.params;
		const task = await Task.findById({ _id: taskID });

		if (!task) {
			return res.status(404).json({ message: `No task with ID: ${taskID}.` });
		}

		res.status(200).json({ task });
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

// * UPDATE Task
const updateTask = async (req, res) => {
	try {
		const { id: taskID } = req.params;

		const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, { new: true, runValidators: true });

		if (!task) {
			return res.status(404).json({ message: `No task with ID: ${taskID}.` });
		}

		res.status(200).json({ task });
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

// * DELETE Task
const deleteTask = async (req, res) => {
	try {
		const { id: taskID } = req.params;
		const task = await Task.findByIdAndDelete({ _id: taskID });

		if (!task) {
			return res.status(404).json({ message: `No task with ID: ${taskID}.` });
		}

		res.status(200).json({ task });
		// res.status(200).json({ task: null, status: `Task with an ID:${taskID} was deleted from the database.` });
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

module.exports = {
	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask,
};
