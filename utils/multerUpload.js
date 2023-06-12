const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      String(
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      )
    );
  },
});

const fileFilter = function (req, file, cb) {
  const regex = /.*\.(png|(j|t)iff|jpe?g|gif|webp|jfif)/i;
  if (file.originalname.match(regex)) cb(null, true);
  else {
    cb(new Error("Only image files are allowed!"), false);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
