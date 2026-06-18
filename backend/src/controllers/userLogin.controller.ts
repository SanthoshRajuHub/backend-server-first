import bcrypt from "bcrypt";
import {prisma} from "../lib/prisma";
import jwt      from "jsonwebtoken";
import "dotenv/config";
import { success } from "zod";

const login= async(req:any,res:any)=>{
    try{
         const {email,password}=req.body;

    const user=await prisma.user.findUnique({
        where:{
            email
        }
    });
    if(!user){
        return res.status(500).json({
            msg:"User Not found",
        })
    }
    const isValid=await bcrypt.compare(
        password,
        user.passwordHash,
    )
    if(!isValid){
        return res.status(401).json({
            msg:"Invalid credentials",
        })
    }
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
        msg:"Login successful",
        data:{
        token:token,
        }
    });
    }catch(err){
        res.status(404).json({
            success:false,
            msg:"Invalid credentials",
        })
    }
}

export default login;
