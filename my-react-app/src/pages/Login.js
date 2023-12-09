import React from 'react'
import { Link} from "react-router-dom";
export const Login = () => {
  return (
    <div>Login
<div>
<label>mail</label>
<input></input>
<label>password</label>
<input type='password'></input>
<br></br>
<Link to="/">Login</Link>
</div>
<Link to="/singin">i dont have account yet</Link>
    </div>
  )                                                                  
}
