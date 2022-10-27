import { app } from './service';

class AuthService {
  async login(email, password) {
    return await app.post('/login', { email, password }).then((res) => {
      localStorage.setItem('authToken', res.data.token);
      return res.data;
    });
  }

  async regiter(name, lastName, email, password) {
    return await app.post('/regiter', { name, lastName, email, password }).then((res) => {
      return res.data;
    })
  }
}

const authService = new AuthService();
export { authService };
