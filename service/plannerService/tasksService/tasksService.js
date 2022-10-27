import { app } from './service';

class TasksService {
  async createTask(id, text) {
    return await app.post(`/${id}`, { text }).then((res) => res.data);
  }

  async deleteTask(id) {
    await app.delete(`/${id}`);
  }

  async updateTask(id) {
    await app.put(`/${id}`);
  }

  async renameTask(id, newText) {
    return await app.patch(`/${id}`, { newText });
  }
}

const taskService = new TasksService();
export { taskService };