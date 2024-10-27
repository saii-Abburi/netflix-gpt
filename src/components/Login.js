
import { useState } from "react";
import Header from "./Header";


const Login = () => {
    const [isSinginform , setIsSigninform] = useState(true);
    const toggleSignin = ()=>{
        setIsSigninform(!isSinginform);
    }
  return (
    <div className="Login">
        <Header/>
        <div className="loginform">
            <form>
                <h2>{isSinginform? "Sign In": "Sign Up"}</h2>
                {!isSinginform &&<input type="text" placeholder="Your Name"></input>}
                {!isSinginform &&<input type="text" placeholder="Date Of Birth"></input>}
                <input className="emailId"  placeholder="Email or Phonenumber"></input>
                <input type="password" placeholder="Password"></input>

                <button>Sign In</button>

                <p>{isSinginform? "New to Netflix? ": "Already Registered SignIn now "}<span id="line" onClick={toggleSignin}>{isSinginform? "Sign In": "Sign Up"} </span>
                </p>
            </form>

        </div>
    </div>
  )
}

export const signUp = ()=>{

}

export default Login;