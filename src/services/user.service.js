class UserService {
  constructor(user) {
    this.user = user;
  }

  async fetchUser(email) {
    try {
      // Make Method to get an user data while removing password etc
      return "user";
    } catch (error) {
      console.log(error);
      throw new Error("Error: U1");
    }
  }
}

module.exports = UserService;
