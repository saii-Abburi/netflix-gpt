import React, { useEffect } from "react";
import logo from "../assets/netflix_logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice.js";
import Acc_logo from '../assets/netflix-acc-icon.jpg'
import {toggleGptSearchView} from '../utils/GptSlice.js';
import { SUPPORTED_LANG } from "../utils/Constants.js";
import { changeLanguage} from "../utils/configSlice.js"

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gptWindow = useSelector(store=>store.gpt.showGptSearch)
  const gptSearch = useSelector(store=>store.gpt.showGptSearch);
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        const { uid, email, displayName , photoURL } = user;
        dispatch(addUser({uid : uid , email : email , displayName: displayName , photoURL: photoURL}));
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
        
      }
    });
    return ()=>{unsubscribe();}
  }, []);
  const handleGptSearchClick = ()=>{
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e)=>{
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="header">
      <img src={logo} alt="Logo" width={150}></img>
      {user && (
        <div>
          {gptWindow && 
          <select onChange={handleLanguageChange}>
            {SUPPORTED_LANG.map(lang => <option key={lang.indentifier} value={lang.indentifier}>{lang.language}</option> )}
          </select>
          }
          <button className="signout gpt" onClick={handleGptSearchClick}>{gptSearch? "Close Search": "GPT Search"}</button>
          <img src= {Acc_logo} alt="Acc-icon" width={50} style={{ borderRadius: "7px" }}></img>
          <button className="signout" onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
