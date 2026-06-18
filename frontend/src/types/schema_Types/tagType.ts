import type {logEntry} from "./logEnteryTypes";
export interface Tag{
    id:string;
    name:string;
    slug:string;
    entries:logEntry[];
}