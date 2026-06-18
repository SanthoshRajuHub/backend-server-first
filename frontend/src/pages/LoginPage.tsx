import { useState } from "react";
import {loginUser}  from '../api/authApi'
import { useNavigate } from "react-router-dom";
export default function LoginPage(){
    
    const navigate = useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

     return (
         <div 
           className="min-h-screen flex bg-blue-200 items-center justify-center-safe px-4">
    
          <div className="w-full max-w-md rounded-2xl shadow-lg bg-white p-8">
              <div className="mb-8 text-center">
                <h1 className="text-2xl font-bold ">
                    Login 
                </h1>
                <p className="text-gray-500 mt-2">
                    Enter Your Log Today
                </p>
              </div>
              <form className="space-y-5">
                    
                 <div className="mb-2">
                    <label 
                       htmlFor="email"
                       className="block text-xl 
                       text-gray-500
                       mb-2 "
                       >
                        Email
                       </label>

                    <input 
                      id="email"
                      type="text"
                      placeholder="Enter Email"
                      className="
                      px-4
                      py-2
                      border
                      border-gray-800
                      rounded-lg
                      w-full
                      focus:outline-none
                      focus:ring-2
                      focus:ring-blue-500
                      focus:border-blue-500
                        "
                     value={email}
                     onChange={(e)=>setEmail(e.target.value)} />
                  </div>

                  <div className="mt-4">
                    <label 
                     htmlFor="password"
                     className="text-xl block
                     text-gray-500
                     mb-2
                     ">
                        Password
                     </label>
                     <input 
                     id="password"
                     placeholder="Enter Password"
                     className="
                     px-4
                     py-2
                     w-full
                     border
                     border-gray-800
                     rounded-lg
                     focus:outline-none
                     focus:ring-2
                     focus:ring=blue-500
                     focus:border-blue-500
                     "
                     value={password}
                     onChange={(e)=>setPassword(e.target.value)}/>
                  </div>
              
                  
                  <button 
                   className="
                    border
                    py-2
                    px-4
                    ml-35
                    mt-3
                    rounded-lg
                    bg-cyan-400/50
                    cursor-pointer
                   "
                   type="button"
                   onClick={async ()=>{
                  const response=  await loginUser(
                        email,
                        password
                    )
            
                    if(response.data.success){
                       navigate("/dashboard");
                    }
                   }}
                   >
                    Login
                   </button>




              </form>
          </div>



         </div>
     );
}