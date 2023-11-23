import { Request, Response } from "express";
import { UserModel } from "../models/userModel";
import prisma from "../config/prismaClient";

const createUser = async (req: Request, res: Response) => {
 
    // await UserModel.create(req.body)

    await prisma.user.create({data : req.body})

  res
    .status(200)
    .json({ message : 'create user success'});
};

const loginUser = (req: Request, res: Response) => {

}

export { createUser, loginUser }
