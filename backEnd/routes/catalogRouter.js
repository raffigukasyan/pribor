const Router = require('express');

const CatalogController = require('../controllers/catalogControllers');

const router = new Router();


router.get('/', CatalogController.getAll);


// router.get('/:title');
//
// router.get('/:title/:subTitle');

router.post('/createCategory', CatalogController.createCategory);

router.post('/createSubCategory', CatalogController.createSubCategory)
module.exports = router;