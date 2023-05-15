const bcrypt = require("bcrypt");
const user = require("../../model/user");
const jwt = require("jsonwebtoken");
const login =
  ("/login",
  (req, res, next) => {
    user
      .find({ username: req.body.username })
      // .exec()
      .then((user) => {
        if (user.length < 1) {
          return res.status(401).json({
            msg: "user not exists",
          });
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
          if (!result) {
            return res.status(401).json({
              msg: "password matching fail",
            });
          }

          if (result) {
            const token = jwt.sign(
              {
                username: user[0].username,
                role: user[0].role,
                email: user[0].email,
                dateOfBirth: user[0].dateOfBirth,
              },
              "this is dummy text",
              {
                expiresIn: "24h",
              }
            );
            res.status(200).json({
              username: user[0].username,
              role: user[0].role,
              email: user[0].email,
              dateOfBirth: user[0].dateOfBirth,
              token: token,
            });
          }
        });
      })
      .catch((err) => {
        res.status(500).json({
          err: err,
        });
      });
  });
module.exports = login;
