const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const multer = require('../middleware/multer-config');

const booksCtrl = require('../controllers/books');

router.get('/', booksCtrl.getAllBooks);

router.post('/', auth, multer, booksCtrl.createBook);

router.get('/:id', booksCtrl.getOneBook);

router.put('/:id', auth, multer, booksCtrl.updateBook);

router.delete('/:id', auth, booksCtrl.deleteBook);

router.post('/:id/rating', auth, booksCtrl.rateBook);

router.get('/bestrating/:id', booksCtrl.getBestRatedBooks);



module.exports = router;
