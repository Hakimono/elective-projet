const { verify } = require("jsonwebtoken");

module.exports = {
  checkToken: (req, res, next) => {
    const token = req.headers.authorization
    if (token) {
      verify(token, process.env.SECRET_API, (err, decoded) => {
        if (err) {
          return res.json({
            success: false,
            message: "Invalid token"
          });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.json({
        success: false,
        message: "Access denied! Unautorized user"
      });
    }
  }
};
