import {prisma} from "../lib/prisma"

const updateStreak=async(userId:number)=>{
   try{
     const today=new Date();

    const streak=await prisma.streak.findUnique({
        where:{
            userId
        }
    });
    // first log ever
    if(!streak){
        await prisma.streak.create({
            data: {
              userId,
              currentStreak:1,
              longestStreak:1,
              lastLogDate:today
            }
        });
        return ;
    }
   
    const lastDate=streak.lastLogDate;

    if(!lastDate) return ;

    const msPerDay=1000*60*60*24;

    const diffDays=Math.floor(
        (today.getTime()-lastDate.getTime())/msPerDay
    );

    // Already logged today

    if(diffDays==0){
        return ;
    }

    let currentStreak;

    if(diffDays==1){
        currentStreak=streak.currentStreak+1;
    }

    else {
        currentStreak=1;
    }

    const longestStreak=Math.max(
         streak.longestStreak,
         currentStreak
    );

    await prisma.streak.update({
        where:{
            userId
        } ,
        data:{
            currentStreak,
            longestStreak,
            lastLogDate:today
        }
    });
   } catch(err){
    console.log("user streak not updated");
    console.error(err);

   }

   } 

export default updateStreak;