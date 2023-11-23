import { PrismaClient as MongoPrismaClient} from "../../prisma/generated/mongo_client";
import { PrismaClient as PostgresPrismaClient } from "../../prisma/generated/postgres_client"; 

export const mongoPrismaClient = new MongoPrismaClient()
export const postgresPrismaCliente = new PostgresPrismaClient()

export const DATA_SOURCE = process.env.DATA_SOURCE ?? "mongo"

export let prismaClient: any

if (DATA_SOURCE === "postgres") {
    prismaClient = postgresPrismaCliente
} else {
    prismaClient = mongoPrismaClient
}

export default prismaClient