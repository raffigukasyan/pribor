import {NextFunction, Request, Response} from "express"
import ApiErrors from "../error/ApiErrors";
export const errorHandler = (err:Error, req:Request, res:Response, next:NextFunction) => {
    if(err instanceof ApiErrors) {
        console.log(err, 'err')
        res.status(err.status).json({message: err.message})
    }
  //  return res.status(500).json({message: 'Непредвиденная ошибка!'})
}
