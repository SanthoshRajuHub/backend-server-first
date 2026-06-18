import api from './axios';

export const createLog=(
    content:string,
    mood:string,
    id:string
)=>{
    return api.post(`/logs/create-log/${id}`,{
        content,
        mood,
    });
};

export const updateLog=(
    content:string,
    mood:string,
    id:string
)=>{
    return api.put(`/logs/${id}`,{
        content,
        mood,
    });
};

export const deleteLog=(
    id:string
)=>{
    return api.delete(`/users/logs/${id}`);
};