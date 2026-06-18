import type {ApiResponse} from './apiTypes';
import type  {logEntry} from '../schema_Types/logEnteryTypes';
import type { Tag } from '../schema_Types/tagType';

export type createLogResponse=ApiResponse<logEntry>;

export type createTagResponse=ApiResponse<Tag>;

export type addTagtoLogResponse=ApiResponse<logEntry>;



