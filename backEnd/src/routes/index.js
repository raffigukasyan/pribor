const Router = require("express");
const router = new Router();


const catalogRouter = require('./catalogRouter');
router.use('/catalog', catalogRouter);

module.exports = router;
