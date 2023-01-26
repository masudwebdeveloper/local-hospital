import React, { useContext } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const SocialLink = () => {
  const { googleSignIn, facebookSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userData = {
          name: user.displayName,
          email: user.email
          
        }
        saveUser(userData)
        if(user){
          navigate('/')
        }
      })
      .catch((err) => console.error(err.message));
  };

  const handleFacebookSignIn = () => {
    facebookSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userData = {
          name: user.displayName,
          email: user.email
          
        }
        saveUser(userData)
        if(user){
          navigate('/')
        }
      })
      .catch((err) => console.error(err.message));
  };

  const saveUser = (userData) =>{
    fetch('http://localhost:5000/user',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err.message))
  }
  return (
    <div className="flex gap-x-5 justify-center">
      <div
        onClick={handleFacebookSignIn}
        className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full cursor-pointer"
      >
        <FaFacebookF className="text-blue-500" />
      </div>
      <div
        onClick={handleGoogleSignIn}
        className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full cursor-pointer"
      >
        <FaGoogle className="text-red-600" />
      </div>
    </div>
  );
};

export default SocialLink;
