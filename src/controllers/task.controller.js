const TaskService = require('../services/task.service');

exports.createTask = async (req, res) => {
  try {
    const task = await TaskService.createTask(req.user._id, req.body);
    res.status(201).json({ message: 'Task created successfully', task });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const result = await TaskService.getTasks(req.user._id, req.query);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const updatedTask = await TaskService.updateTask(
      req.user._id,
      req.params.id,
      req.body
    );
    res.status(200).json({ message: 'Task updated successfully', updatedTask });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await TaskService.deleteTask(req.user._id, req.params.id);
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
