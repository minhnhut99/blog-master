const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const modelUser = require("../models/modelUser");
const httpHandler = require("../helper/HttpHandler");
const controllerUser = {
  register: async (req, res) => {
    try {
      const { fullname, username, password, email } = req.body;
      if (!(fullname && username && email && password)) {
        httpHandler.fail(res, "Missing username or password");
      }
      const oldUser = await modelUser.findOne({ email });
      if (oldUser) {
        httpHandler.fail(res, "Username already taken!");
      }
      encryptedPassword = await bcrypt.hash(password, 10);

      const user = await modelUser.create({
        fullname,
        username: username.toLowerCase(),
        password: encryptedPassword,
        email: email.toLowerCase(),
      });

      // create token
      const token = jwt.sign(
        { user_id: user._id, username },
        process.env.TOKEN_KEY,
        {
          expiresIn: 900,
        }
      );
      user.token = token;
      res.status(201).json(user);
    } catch (error) {
      console.log("error", error);
    }
  },
  login: async (req, res) => {
    console.log("res", res);
    try {
      const { username, password } = req.body;
      if (!(username && password)) {
        res.status(400).send("All input is required");
      }
      const user = await modelUser.findOne({ username });
      if (user && (await bcrypt.compare(password, user.password))) {
        // create token
        const token = jwt.sign(
          { user_id: user._id, username },
          process.env.TOKEN_KEY,
          {
            expiresIn: 900,
          }
        );
        user.token = token;
        res.status(200).json(user);
      }
      res.status(400).send("Invalid Credentials");
    } catch (error) {
      console.log(error.message);
    }
  },
};

module.exports = controllerUser;
