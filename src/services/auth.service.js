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
              { email: authUser.email, role: authUser.role },
              process.env.SECRET_KEY,
              { expiresIn: "2d" }
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
      newUser.role = 0;
      let result = await this.user.create(newUser);
      result = {
        email: result.email,
        token: jwt.sign(
          { email: result.email, role: result.role },
          process.env.SECRET_KEY,
          { expiresIn: "2d" }
        ),
      };

      return result;
    } catch (error) {
      console.log(error);
      throw new Error("Error: A2");
    }
  }

  async tokenCheck(token) {
    try {
      const result = jwt.verify(token, process.env.SECRET_KEY, (err) => {
        if (err) {
          return 0;
        }
        return 1;
      });
      return result;
    } catch (error) {
      console.log(error);
      throw new Error("Error: A3");
    }
  }
}

module.exports = AuthService;
