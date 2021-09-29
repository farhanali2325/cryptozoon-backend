const express = require('express');
const router = express.Router();
const FavController = require('../controllers/favourite');

router.post('/', FavController.insert);
router.get('/', FavController.get);
router.patch('/', FavController.update);
module.exports = router;