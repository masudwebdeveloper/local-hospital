import React, { useContext } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const SocialLink = () => {
  const { googleSignIn, facebookSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err.message));
  };

  const handleFacebookSignIn = () => {
    facebookSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err.message));
  };

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
