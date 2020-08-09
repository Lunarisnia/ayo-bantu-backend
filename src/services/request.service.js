class RequestService {
  constructor(request) {
    // super();
    this.request = request;
  }

  async addNewPost(post, userEmail) {
    try {
      let user = await this.user.findOne({ email: userEmail });

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
