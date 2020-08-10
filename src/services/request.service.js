const UserService = require("./user.service");
const jwt = require('jsonwebtoken');

class RequestService extends UserService{
  constructor(user, request) {
    super(user);
    this.request = request;
  }

  async addNewPost(post, token) {
    try {
      let user = await this.fetchCurrentUser(token);

      post.creatorUser = user;
      post.postedAt = Date();
      post.donatorCount = 0;
      const result = await this.request.create(post);

      return result;
    } catch (error) {
      console.log(error);
      throw new Error("Error: R1");
    }
  }
}

module.exports = RequestService;
