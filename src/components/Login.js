import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSinginform, setIsSigninform] = useState(true);
  const toggleSignin = () => {
    setIsSigninform(!isSinginform);
  };
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    const emailValue = email.current?.value;
    const passwordValue = password.current?.value;
    const nameValue = isSinginform ? null : name.current?.value;

    const validMessage = checkValidData(emailValue, passwordValue, nameValue);
    setErrorMessage(validMessage);
    if (validMessage) return;

    if (!isSinginform) {
      //signup
      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameValue, photoURL: "https://avatars.githubusercontent.com/u/147138953?v=4"
          }).then(() => {
            const { uid, email, displayName , photoURL } = auth.currentUser;
            dispatch(addUser({uid : uid , email : email , displayName: displayName , photoURL: photoURL}));
            
          }).catch((error) => {
            // An error occurred
            // ...
          });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode, errorMessage);
        });
    }
    else {
      //signin
      signInWithEmailAndPassword(auth, email.current?.value, password.current?.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode , errorMessage);
        });
    }
  };
  return (
    <div className="Login">
      <Header />
      <div className="loginform">
        <form onSubmit={(e) => e.preventDefault()}>
          <h2>{isSinginform ? "Sign In" : "Sign Up"}</h2>
          {!isSinginform && (
            <input type="text" ref={name} placeholder="Your Name"></input>
          )}
          {!isSinginform && (
            <input type="text" placeholder="Date Of Birth"></input>
          )}
          <input
            className="emailId"
            ref={email}
            placeholder="Email or Phonenumber"
          ></input>
          <input type="password" ref={password} placeholder="Password"></input>

          <p id="errormessage">{errorMessage}</p>

          <button onClick={handleButtonClick}>{isSinginform?"sign in" : "signup"}</button>

          <p>
            {isSinginform
              ? "New to Netflix? "
              : "Already Registered "}
            <span id="line" onClick={toggleSignin}>
              {isSinginform ? "Sign up" : "Sign In"}{" "}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
