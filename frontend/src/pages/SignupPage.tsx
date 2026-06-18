import { useState } from "react";
import {registerUser} from '../api/authApi'
import { useNavigate } from "react-router-dom";

export default function SignupPage(){
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
   

    return (
       <div className="min-h-screen flex   bg-blue-200 items-center justify-center-safe px-4">
           <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-8 text-center">
                <h1 className="text-3xl fond-bold text-gray-900">
                    Create Account 
                </h1>
                <p className="text-gray-500 mt-2">
                    Start documenting your devlopment journey
                </p>
              </div>

            <form className="space-y-5"
                  onSubmit={(e)=>{
                    e.preventDefault();
                  }}>
                
                <div>
                    <label 
                        htmlFor="username"
                        className="block text-sm font-medium   mb-2"
                        >
                            Username
                        </label>
                     <input 
                         id="username"
                         type="text"
                         placeholder="Enter Username"
                         className="
                          w-full
                          px-4
                          py-3
                          border
                          border-gray-300
                          rounded-lg
                          focus:outline-none
                          focus:ring-2
                          focus:ring-blue-500
                          focus:border-blue-500
                          "
                          value={username}
                         onChange={(e)=>setUsername(e.target.value)}
                    />
                </div>
                <div>
                   <label 
                      htmlFor="email"
                      className="block text-lg font-medium  mb-2"
                      >
                        Email
                      </label>
                   
                   <input 
                      id='email'
                      placeholder="Enter Email"
                      className="
                        w-full
                        px-4
                        py-3
                        border
                        border-gray-300
                        rounded-lg
                        focus:outline-none
                        focus:ring-2
                        focus:border-blue-500
                        focus:ring-blue-500  
                      "
                     value={email}
                     onChange={(e)=>setEmail(e.target.value)}
                     />

                </div>
               <div>
                 <label
                   htmlFor="password"
                   className="block text-sm font-medium mb-2"
                   >Password
                   </label>

                   <input 
                    id="password"
                    placeholder="Enter Password"
                    className="
                        w-full
                        px-4
                        py-3
                        rounded-lg
                        border
                        border-2
                        border-gray-300
                        focus:outline-none
                        focus:ring-2
                        focus:border-blue-500
                        focus:ring-blue-500
                    "
                      value={password}
                onChange={(e)=>setPassword(e.target.value)}
                  />
               </div>

             <button 
               className="
               items-center 
               justify-center-safe 
               width-sm
               rounded-xl
               ml-25
               px-10
               py-2
               shadow-lg
               bg-cyan-500
               shadow-cyan-500/50
               cursor-pointer
               "
              onClick={async()=>{

               const response=await  registerUser(
                    username,
                    email,
                    password
                )

                if(response?.data?.success){
                    navigate("/dashboard");
                }
              }
              }
               > Create Account </button>
                </form>    
        
          </div>
        
        
        </div>
    );
}