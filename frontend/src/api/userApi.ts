import api from './axios';

export const getAllUsers=()=>{
    return api.get("/users/");
};

export const getUserById=(id:number)=>{
     return api.get(`/users/${id}`);
};

export const profile=()=>{
    const user= api.get('/me');
    return user;
};