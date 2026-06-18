import {prisma} from "../lib/prisma"

const addTagtoLog=async(req:any,res:any)=>{
    const {logId,tagId}=req.params;
  
    try{
        const log=await prisma.logEntry.update({
            where:{
                id:logId
            },
            data:{
                tag:{
                    connect:{
                        id:tagId
                    }
                }
            },
            include:{
                tag:true
            }
           
        });
     res.status(200).json({
        success:true,
        msg:"Tag added to Log",
        data:log
     });
    } catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            msg:"failed to add tag",
        })
    }
}
export default addTagtoLog;