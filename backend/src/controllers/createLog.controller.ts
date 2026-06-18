import {prisma} from "../lib/prisma"
import updateStreak from "./addStreak.controller"

  const createLog =async (req:any,res:any)=>{
        //   const userId=Number(req.params.id);
    try{
      
       const {content,mood}=req.body;

        const logs=await prisma.logEntry.create({
           
           data:{
            content,
            mood,
             author:{
                connect:{
                    id:req.user.userId
                }
            }
           }
        });
        await updateStreak(req.user.userId);

        res.send(200).json({
            success:true,
            msg:"Log created and streak got updated",
            data:logs
        })
    } catch(err){
        console.error(err);
        res.send(500).json({
            success:false,
            msg:"Can't update log for this user"
        })
    }
}

export default createLog;

