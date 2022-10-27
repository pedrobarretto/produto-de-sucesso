import { app } from './service';

class GoalsService {
  async createGoal(name) {
    return await app.post('/create', { name }).then((res) => res.data);
  }

  async deleteGoal(id) {
    await app.delete(`/${id}`);
  }
}

const goalsService = new GoalsService();
export { goalsService };
