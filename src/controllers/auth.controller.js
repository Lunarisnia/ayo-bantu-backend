const auth = async (req, res, service) => {
  try {
    const cred = req.body;
    const result = await service.authenticate(cred);

    if (result) {
      res.send(result);
    } else {
      res.status(401);
      res.send("Unauthorized");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const register = async (req, res, service) => {
  try {
    const newUser = req.body;
    const result = await service.addNewUser(newUser);

    res.send(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

module.exports = { auth, register };
