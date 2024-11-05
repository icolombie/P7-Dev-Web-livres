const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const uploadAndOptimizeImage = require("../middleware/multer-config");

const booksCtrl = require("../controllers/books");


router.get("/", booksCtrl.getAllBooks);

router.post("/", auth, uploadAndOptimizeImage, booksCtrl.createBook);

router.get("/bestrating", booksCtrl.getBestRatedBooks);

router.get("/:id", booksCtrl.getOneBook);

router.put("/:id", auth, uploadAndOptimizeImage, booksCtrl.updateBook);

router.delete("/:id", auth, booksCtrl.deleteBook);

router.post("/:id/rating", auth, booksCtrl.rateBook);


module.exports = router;
