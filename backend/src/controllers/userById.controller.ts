import {prisma} from "../lib/prisma"

const user=async(req:any,res:any)=>{
    try{
         const userId=req.user.userId;
    const userById=await prisma.user.findUnique({
        where:{
            id:userId,
        } ,
        include:{
            streak:true,
            logEntry:true,

        }
    });
    res.status(200).json({
        success:true,
        msg:"user with Id",
        data:userById
    });
    } catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            msg:"Unable to fetch",
        })
    }
}

export default user;