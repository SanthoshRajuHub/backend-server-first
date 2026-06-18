import express from "express";
import userRouter from "./routes/user.routes";
import logsRouter from "./routes/logs.routes";
import createLog  from "./controllers/createLog.controller";
import createTag  from "./controllers/createTag.controller";
import addTagtoLog from "./controllers/addTagtoLog.controller";
import addStreak   from "./controllers/addStreak.controller";
import authmiddleware from "./middlewares/auth.middlewares";
import allUsers from "./controllers/allUsers.controller";
import userById  from './controllers/userById.controller';
import cors from "cors";
const app=express()

app.use(express.json())

app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

app.use('/users',userRouter);

app.get('/me',authmiddleware,userById);

app.use('/logs',logsRouter);





app.listen(3000,()=>{
    console.log("server is running at port:3000");
})