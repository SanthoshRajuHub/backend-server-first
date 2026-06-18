import api from './axios';

export const loginUser=async(
      email:string,
      password:string
)=>{
    const response=await api.post('/users/login',{
        email,
        password,
    });

    

    if(response.data.success){
        localStorage.setItem(
            "token",
            response.data.data.token
        );
    }
    return response;
};

export const registerUser=async(
    username:string,
    email:string,
    password:string
)=>{
    const response=await  api.post('/users/sign-in',{
        username,
        email,
        password
    });

   
    if(response.data.success){
        localStorage.setItem(
            "token",
            response.data.token
        );
        
    }
    return response; 
};