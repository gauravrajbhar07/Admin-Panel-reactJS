import React, { useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../../firebase";
// import { auth } from "./firebase";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/authContext";

function Login() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //navigate hooks
  const navigate = useNavigate();

  //destructoring
  const { dispatch } = useContext(AuthContext);

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Perform login/authentication logic using Firebase
  //   auth
  //     .signInWithEmailAndPassword(email, password)
  //     .then((userCredential) => {
  //       // User signed in successfully
  //       const user = userCredential.user;
  //       // Do something with the user data
  //     })
  //     .catch((error) => {
  //       // Handle login error
  //       console.error(error);
  //     });
  // };

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        setError(true);
        // ..
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");

        //user is from firebase
        dispatch({ type: "LOGIN", payload: user });

        console.log(user);
        // ...
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={handleEmailChange}
            // value={email}
            // onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            // value={password}
            // onChange={handlePasswordChange}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
        {error && (
          <span style={{ color: "red", display: "block", textAlign: "center" }}>
            Wrong email or password
          </span>
        )}
      </form>
    </div>
  );
}

export default Login;
