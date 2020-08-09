const currentUser = async (req, res, service) => {
  try {
    const token = req.headers.authorization;
    const result = await service.fetchCurrentUser(token.slice(7));

    res.send(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

module.exports = { currentUser };
