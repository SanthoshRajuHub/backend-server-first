export interface ApiSuccess<T>{
    success:true;
    msg:string;
    data:T;
}

export interface ApiError{
    success:false;
    msg:string;
}

export type ApiResponse<T>=
   ApiSuccess<T>
   |ApiError;

