const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const ctrl = require('../controllers/productController');

router.get('/', ctrl.list);
router.get('/:id', ctrl.get);
router.post('/', upload.single('image'), ctrl.create);
router.put('/:id', upload.single('image'), ctrl.update);
router.delete('/:id', ctrl.destroy);

module.exports = router;
