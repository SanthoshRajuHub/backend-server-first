import {createContext,useEffect,useState} from 'react';
import type { User } from '../types/schema_Types/userTypes';
import api from '../api/axios';

interface AuthContextType{
    user:User| null;
    token:string| null;
    
    loading:boolean;

    isAuthenticated:boolean;

    login:(
        token:string,
        uses:User
    )=>void;

    logout:()=>void;
}

export const AuthContext=
createContext<AuthContextType | null>(
     null
);


export const AuthProvider=({
    children
}:{
    children:React.ReactNode;
})=>{

    const [user,setUser]=
           useState<User|null>(null);
        
    const [token,setToken]=
          useState<string|null>(
            localStorage.getItem("token")
          );
    
    

    const [loading,setLoading]=
           useState<boolean>(true);

    useEffect(()=>{

        if(!token) {
            setLoading(false);
            return;
        } 

      const fetchUser= async()=>{
           try{

            const user=await api.get('/me');
            setUser(user.data.data);
            
           } catch(err){
            console.error(err);

            logout();

           } finally{

            setLoading(false);
           }
        };
        fetchUser();
      },[token]);
    
    const login=(
        token:string,
        user:User
    )=>{
        localStorage.setItem(
            "token",
            token
        );

        setToken(token);

        setUser(user);
    };

    const logout=()=>{

        localStorage.removeItem("token");

        setLoading(false);

        setToken(null);

        setUser(null);
    }

    const isAuthenticated=!!token;

    return (
        <AuthContext.Provider 
            value={{
                user,
                token,
                loading,
                isAuthenticated,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};

