import { Request, Response } from "express";
import prisma from "../config/prismaClient";

const addMovie = async (req: Request, res: Response) => {
 
   

    await prisma.movie.create({data : req.body})

  res
    .status(200)
    .json({ message : 'movie created success'});
};

const removeMovie = (req: Request, res: Response) => {

}

export { addMovie, removeMovie }