const jwt = require('jsonwebtoken');

class UserService {
  constructor(user) {
    this.user = user;
  }

  async fetchUser(email) {
    try {
      const result = await this.user.findOne({email: email});

      return {
        _id: result._id,
        fullname: result.fullname,
        email: result.email,
        role: result.role,
      }
    } catch (error) {
      console.log(error);
      throw new Error("Error: U1");
    }
  }

  async fetchCurrentUser(token) {
    try {
      const {email} = jwt.decode(token);
      const user = await this.fetchUser(email);

      return user;
    } catch (error) {
      console.log(error);
      throw new Error("Error: U2");
    }
  }
}

module.exports = UserService;
