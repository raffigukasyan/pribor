import { v4 as uuidv4 } from 'uuid';
import path from "path";
import {Category, SubCategory} from  '../models/Category';
import {ErrorRequestHandler, NextFunction, Request, Response} from "express";
import {FileArray, UploadedFile} from "express-fileupload";
import ApiErrors from "../error/ApiErrors";


class CategoryControllers {
    async createCategory(req:Request, res:Response, next:NextFunction) {
        try {
            const {name} = req.body;
            if(!name) {
                next(ApiErrors.badRequest('Введите имя'))
            }
            const {image} = req.files as {image: UploadedFile};
            const fileName:string = uuidv4() + `.${image.name.split(".").reverse()[0]}`;
            image.mv(path.resolve(__dirname, '..', 'static', fileName))
            const category = await Category.create({name: name, image: fileName})
            console.log(category, 'category')
            return res.json({message: 'Каталог создан !'})
        }
        catch (e:any) {
            console.log(`ERROR ${e}`);
            next(ApiErrors.badRequest(e.message))
        }
    }
    async createSubCategory(req:Request, res:Response) {
        const {name, catId} = req.body;

        console.log(name, catId);

       // const subCategory = await SubCategory.create({name, categoryId: catId})

        return res.json({message: "CREATED"});
    }
    async getAll(req:Request, res:Response) {
        console.log('AAAA');
        res.send('dddd')
        // try {
        //     const result = await Category.findAll({
        //         include: {
        //             model: SubCategory,
        //             attributes: ['id', 'name', 'categoryId']
        //         }
        //     });
        //     return res.json(result);
        // }
        // catch (error) {
        //     console.log(`Error - ${error}`);
        //     return res.status(400).send({error: error});
        // }
    }
    async getOne(req:Request, res:Response) {
        console.log(req.params.title, 'Req');
    }
}

export default new CategoryControllers();