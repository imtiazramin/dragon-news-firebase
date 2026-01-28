import React, { use } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";

const SocialLogin = () => {
  const {googleSignIn}=use(AuthContext)
  const handleGoogle=()=>{
 googleSignIn()
 .then(result=>{
  console.log(result)
 }).catch(error=>{console.log(error)})
  }
  const handleGithub=()=>{
    console.log('hello')
  }
  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-3">
        <button onClick={handleGoogle} type="submit" className="btn btn-secondary btn-outline w-full">
          <FcGoogle size={24} /> Login with Google
        </button>
        <button type="submit" onClick={handleGithub} className="btn btn-outline btn-primary w-full">
          <FaGithub size={24} /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
