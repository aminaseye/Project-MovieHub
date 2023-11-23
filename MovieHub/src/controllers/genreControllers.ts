import { Request, Response } from "express";
import prisma from "../config/prismaClient";

const addGenre = async (req: Request, res: Response) => {
 
    // await UserModel.create(req.body)

    await prisma.genre.create({data : req.body})

  res
    .status(200)
    .json({ message : 'create genre success'});
};

const removeGenre = (req: Request, res: Response) => {

}

export { addGenre, removeGenre }