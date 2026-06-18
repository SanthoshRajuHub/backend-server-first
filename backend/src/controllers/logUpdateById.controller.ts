import {prisma} from "../lib/prisma";
import {z} from "zod";

const newContent=z.object({
    content:z.string(),
    mood:z.string()
})

const logs=async(req:any,res:any)=>{
    try{
        const userId=(req.params.id);
    const {content,mood} =newContent.parse(req.body);
    const oldLog=await prisma.logEntry.findMany({
        where:{
            id:userId,
        },
    });

    const newLog=await prisma.logEntry.update({
         where:{
            id:userId,
         },
         data:{
            content,
            mood,
         }
    })
    res.status(200).json({
        success:true,
        msg:"Updated Log",
        data:{
          oldLog,
          newLog
        }
        
    })
    }catch(err){
        res.status(404).json({
            success:false,
            msg:"Update failed!",
        })
    }
}
export default logs;