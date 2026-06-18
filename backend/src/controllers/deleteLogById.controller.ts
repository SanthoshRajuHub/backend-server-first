import {prisma} from "../lib/prisma";



const deleteLog=async (req:any,res:any)=>{
   try{
        const userId=(req.params.id);

       await prisma.logEntry.delete({
         where:{
           id:userId
         },

       })
       res.status(200).json({
        success:true,
        msg:"Deletion completed",
        
       })
   } catch(err){
      console.error(err);
      res.status(500).json({
        success:false,
        msg:"Deletion Not completed",
      })
   }

}

export default deleteLog;