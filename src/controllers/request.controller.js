const addPost = async (req, res, service) => {
  try {
    const post = req.body;
    const token = req.headers.authorization.slice(7);
    const result = await service.addNewPost(post, token);

    res.send(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

module.exports = { addPost };
