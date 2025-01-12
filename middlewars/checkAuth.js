const jwt = require("jsonwebtoken");
const { HttpError } = require("../helpers");
const { prismadb } = require("../prismaClient");

const checkAuth = (req, res, next) => {
  const authHedear = req.headers.authorization;

  if (!authHedear) {
    return next(HttpError("Unouthorized", 401));
  }

  const [bearer, token] = authHedear.split(" ", 2);

  if (!token || bearer !== "Bearer") {
    return next(HttpError("Unouthorized", 401));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return next(HttpError("Unouthorized", 401));
    }
    req.userId = decoded.userId;
    next();
  });
};

const authorizeRole = (role) => {
  return async (req, res, next) => {
    try {
      const userId = req.userId;
      const user = await prismadb.user.findUnique({
        where: {
          id: userId,
        },
      });

      if (!user) {
        return next(HttpError("Unouthorized", 401));
      }

      if (user.role !== role) {
        return next(HttpError("Forbidden - Insufficient permissions", 403));
      }

      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
};

module.exports = {
  checkAuth,
  authorizeRole,
};
