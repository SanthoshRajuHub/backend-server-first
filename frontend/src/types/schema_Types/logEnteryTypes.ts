import type {Tag} from './tagType';
import type {User} from './userTypes';
export interface logEntry{
    id:string;
    content:string;
    mood:string;
    createdAt:string;
    authorId:number;
    author:User;
    tag:Tag[];
}