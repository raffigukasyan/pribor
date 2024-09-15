const Router = require('express');

const CategoryController = require('../controllers/categoryControllers');

const router = new Router();


router.get('/', CategoryController.getAll);


router.get('/:title', CategoryController.getOne);
//
// router.get('/:title/:subTitle');

router.post('/createCategory', CategoryController.createCategory);

router.post('/createSubCategory', CategoryController.createSubCategory)
module.exports = router;