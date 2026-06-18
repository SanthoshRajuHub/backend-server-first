import bcrypt from "bcrypt";
import {prisma} from "../lib/prisma"
import {success, z} from "zod"
import jwt from "jsonwebtoken";

const createUser=z.object({
    username:z.string(),
    email:z.email(),
    password:z.string()
});

 const user= async(req:any,res:any)=>{
    try{
       const {username,email,password}=req.body;
       const passwordHash=await bcrypt.hash(
               password,
               10
       )

       

     const user=  await  prisma.user.create({
            data:{
                username,
                email,
                passwordHash
            }
        });
        const token=jwt.sign(
        {
            userId:user.id
        },
        process.env.JWT_SECRET!,
        {
            expiresIn:"3d"
        }
    )    

        res.status(200).json({
            success:true,
            msg:"User created successfully",
            data:user,
            token:token
        })
    } catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            msg:"User Not created",
        })
    }
}

export default user;
