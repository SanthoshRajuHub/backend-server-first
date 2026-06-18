

const idcheckmiddleware=async(req:any,res:any,next:any)=>{
        const tokenUserId=req.user.userId;
        const routeId=req.params.id;

        if(Number(tokenUserId)!==Number(routeId)){
            return res.send(403).json({
                msg:"unauthorized",
            });
        }
        next();

};

export default idcheckmiddleware;