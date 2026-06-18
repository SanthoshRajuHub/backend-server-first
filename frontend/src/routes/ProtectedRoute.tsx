import { Navigate } from "react-router-dom"
import {useContext} from 'react'
import { AuthContext } from "../context/AuthContext"

const ProtectedRoute=({
    children
}:{
    children:React.ReactNode;
})=>{
 

    const auth=useContext(AuthContext);

    if(auth?.loading) {
        return (
            <h1>
                Loading...
            </h1>
        )
    }
    

    if(!auth?.token){
        return <Navigate to='/login'></Navigate>
    }

    return children;
}

export default ProtectedRoute;
