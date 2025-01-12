const path = require("path");
const multer = require("multer");

const tempDir = path.join(__dirname, "..", "temp");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, tempDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 50 * 1024 * 1024 },
});

module.exports = {
  upload,
};
