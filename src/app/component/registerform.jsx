"use client";

import React, { useState } from "react";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();

    const userRegisteredData = {
      username,
      email,
      password,
    };

    console.log(userRegisteredData);
  };

  return (
    <div className="formContainer">
      <div className="formSection">
        <h1>Register</h1>

        <form onSubmit={registerHandler}>
          <h3>Username</h3>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

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

          <button type="submit">Register</button>
        </form>

        <a href="/login" className="authLink">
          Already have an account? Login
        </a>
      </div>
    </div>
  );
};

export default RegisterForm;