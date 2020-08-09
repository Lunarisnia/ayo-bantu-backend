const addPost = async (req, res, service) => {
  try {
      const post = req.body;
      const email = req.query.u;
      const result = await service.addNewPost(post, email);

      res.send(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

module.exports = {addPost}
