const multer = require("multer");
const sharp = require("sharp");
const path = require("path");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image.jfif": "jpg",
  "image/png": "png",
};

const storage = multer.memoryStorage();

const upload = multer({ storage: storage }).single("image");

const uploadAndOptimizeImage = (req, res, next) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (!req.file) {
      return next();
    }

    const name = req.file.originalname.split(" ").join("_");
    const extension = MIME_TYPES[req.file.mimetype];
    const filename = name + Date.now() + "." + extension;
    const outputPath = path.join("images", filename);

    try {
      await sharp(req.file.buffer)
        .resize(400, 600, {
          fit: sharp.fit.cover,
        })
        .toFormat("jpeg")
        .jpeg({ quality: 80 })
        .toFile(outputPath);

      req.file.filename = filename;
      req.file.path = `/images/${filename}`;
      next();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
};

module.exports = uploadAndOptimizeImage;
