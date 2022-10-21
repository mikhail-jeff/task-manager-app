const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, 'You must provide title!'],
			trim: true,
			maxlength: [25, 'title can not be more than 25 characters!'],
		},
		isCompleted: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
