const { prismadb } = require("../prismaClient");
const jwt = require("jsonwebtoken");

const checkUserType = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      req.userType = "user";
      return next();
    }

    const [bearer, token] = authHeader.split(" ", 2);
    if (bearer !== "Bearer" || !token) {
      req.userType = "user";
      return next();
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        req.userType = "user";
        return next();
      }

      const user = await prismadb.user.findUnique({
        where: {
          id: decoded?.userId,
        },
      });

      req.userType = user?.type || "user";
      next();
    });
  } catch (error) {
    console.error("Error in checkUserType middleware:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  checkUserType,
};
