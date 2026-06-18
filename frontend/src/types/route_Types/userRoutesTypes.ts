import type {ApiResponse} from './apiTypes'
import type {User} from '../schema_Types/userTypes';
import type {logEntry} from '../schema_Types/logEnteryTypes';

export type createUserResponse=ApiResponse<User>;

export type loginResponse=ApiResponse<string>;

export type allUsersResponse=ApiResponse<User[]>;

export type userByIdResponse=ApiResponse<User>;

export type logUpdateByIdResponse=ApiResponse<{
    oldLog:logEntry;
    newLog:logEntry;
}>;

export type deleteLogByIdResponse=ApiResponse<null>;





