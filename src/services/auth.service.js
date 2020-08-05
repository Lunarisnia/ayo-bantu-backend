const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

class AuthService {
  constructor(user) {
    this.user = user;
  }

  async authenticate({ email, password }) {
    try {
      let authUser = await this.user.findOne({ email: email });
      if (authUser) {
        const passwordMatch = bcrypt.compareSync(password, authUser.password);
        if (passwordMatch) {
          authUser = {
            email: authUser.email,
            token: jwt.sign(
              { fullname: authUser.email, role: authUser.role },
              process.env.SECRET_KEY
            ),
          };
          return authUser;
        } else {
          return null;
        }
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      throw new Error("Error: A1");
    }
  }

  async addNewUser(newUser) {
    try {
      newUser.password = bcrypt.hashSync(newUser.password);
      let result = await this.user.create(newUser);
      result = {
        email: result.email,
        token: jwt.sign(
          { fullname: result.email, role: result.role },
          process.env.SECRET_KEY
        ),
      };

      return result;
    } catch (error) {
      console.log(error);
      throw new Error("Error: A2");
    }
  }
}

module.exports = AuthService;
