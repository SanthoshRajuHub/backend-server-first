import { success } from "zod";
import {prisma} from "../lib/prisma"

const allUsers=async(req:any,res:any)=>{
    try{
        const users=await prisma.user.findMany({
        include:{
            streak:true,
            logEntry:{
                include:{
                    tag:true,
                }
            }
        }
    })
    res.status(200).json({
        success:true,
        msg:"All Users",
        data:users
    });
    }catch(err){
        res.status(404).json({
            success:false,
            msg:"Unable to fetch users",
        })
    }
}

export default allUsers;