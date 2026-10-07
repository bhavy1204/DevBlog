import { Query } from "pg";
import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt"


export const resolvers = {
    Query:{
        users:()=>prisma.user.findMany(),
    },

    Mutation:{
        createUser: async( _:unknown, args:{
            username:string,
            email:string,
            password:string
        })=>{
            const passwordHash = await bcrypt.hash(args.password, 12);

            return prisma.user.create({
                data:{
                    username:args.username,
                    email:args.email,
                    passwordHash,
                }
            })
        }
    }
}

