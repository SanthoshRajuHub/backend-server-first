import {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';



 function Navbar(){
    const auth=useContext(AuthContext);
    const navigate=useNavigate();
    return (
    <div>
       <button onClick={()=>{
        navigate('/login')
       }} > Logout </button>
    </div>
    );
}

export default Navbar;