const Task = require('../models/task.model');

class TaskService {

  static async createTask(userId, data) {
    const task = await Task.create({ ...data, userId });
    return task;
  }

  
  static async getTasks(userId, query) {
    const { status, page = 1, limit = 10 } = query;

    const filter = { userId };
    if (status) filter.status = status;

    const tasks = await Task.find(filter)
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .sort({ createdAt: -1 });

    const total = await Task.countDocuments(filter);

    return {
      total,
      page: parseInt(page),
      limit: parseInt(limit),
      tasks,
    };
  }


  static async updateTask(userId, taskId, data) {
    const task = await Task.findOneAndUpdate(
      { _id: taskId, userId },
      data,
      { new: true }
    );
    if (!task) throw new Error('Task not found or not authorized');
    return task;
  }

  
  static async deleteTask(userId, taskId) {
    const task = await Task.findOneAndDelete({ _id: taskId, userId });
    if (!task) throw new Error('Task not found or not authorized');
    return task;
  }
}

module.exports = TaskService;
