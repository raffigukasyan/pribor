import {Router} from "express";
import CatalogControllers from "../controllers/categoryControllers";

const catalogRouter = Router();


catalogRouter.get('/', CatalogControllers.getAll);

export default catalogRouter;
// catalogRouter.get('/:title', CategoryController.getOne);
// //
// // router.get('/:title/:subTitle');

catalogRouter.post('/createCategory', CatalogControllers.createCategory);

// catalogRouter.post('/createSubCategory', CategoryController.createSubCategory)

