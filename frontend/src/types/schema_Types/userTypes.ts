import type { logEntry } from "./logEnteryTypes";
import type {Streak}     from "./streak"

export interface User{
    id:number;
    email:string;
    username:string;
    passwordHash:string;
    bio:string|null;
    isPublic:string;
    createdAt:string;
    logEntry:logEntry[];
    streak:Streak[];

}