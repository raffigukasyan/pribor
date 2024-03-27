const {Category, SubCategory} = require('../models/models');

class CatalogControllers {
    async createCategory(req, res) {
        const {name, image} = req.body;
        const category = await Category.create({name: name, image: image})

        return res.json({name, image});
    }
    async createSubCategory(req, res) {
        const {name, catId} = req.body;

        console.log(name, catId);

        const subCategory = await SubCategory.create({name, categoryId: catId})

        return res.json({message: "CREATED"});
    }
    async getAll(req, res) {
      const result = await Category.findAll({
          include: {
            model: SubCategory,
            attributes: ['id', 'name', 'categoryId']
          }
      });

        return res.json(result);
    }
    async getOne() {

    }
}

module.exports = new CatalogControllers();