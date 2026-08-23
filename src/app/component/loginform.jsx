"use client";

import React, { useState } from "react";
import { loginAction } from "../serverActions/loginAction";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("")

  const router =useRouter()


  const loginHandler = async (e) => {
    e.preventDefault();

    const userLoginData = {email, password}
    console.log(userLoginData);
    try{
        const response= await loginAction(userLoginData)
        if(response.success){
        alert("Login  sucessful")
        router.push('/')
        }
        else{
            setError(response.message || "Login failed");
        }
    }catch(error){
        console.log("error")
            setError("Something went wrong. Please try again.");

    }

  };

  return (
    <div className="formContainer">
      <div className="formSection">
        <h1>Login </h1>

        <form onSubmit={loginHandler}>
      
        {error && <p style={{color:'red'}}>{error}</p>}
          <h3>Email</h3>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <h3>Password</h3>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <a href="/register" className="authLink">
          Dont have an account? Register
        </a>
      </div>
    </div>
  );
};

export default LoginForm;