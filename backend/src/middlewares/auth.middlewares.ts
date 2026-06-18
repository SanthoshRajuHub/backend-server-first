import jwt from "jsonwebtoken";
import "dotenv/config";

const authmiddleware=async(req:any,res:any,next:any)=>{
    try{
         const authHeader=req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({
            msg:"Token missing",
        });
    }

    const token=authHeader.split(" ")[1];

    const decoded=jwt.verify(token,process.env.JWT_SECRET!);

    req.user=decoded;
    
    next();
    } catch(err){
        return res.status(401).json({
            msg:"Invalid token",
        })
    }

}

export default authmiddleware;