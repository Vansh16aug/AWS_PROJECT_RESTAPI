import React, { useState } from "react";
import axios from "axios";

const registerUrl =
  "https://wt1r0rb13f.execute-api.ap-south-1.amazonaws.com/prod/register";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      username.trim() === "" ||
      email.trim() === "" ||
      name.trim() === "" ||
      password.trim() === ""
    ) {
      setMessage("All fields are required");
      return;
    }
    setMessage(null);
    const requestConfig = {
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    };
    const requestBody = {
      username: username,
      email: email,
      name: name,
      password: password,
    };
    axios
      .post(registerUrl, requestBody, requestConfig)
      .then((response) => {
        setMessage("Registeration Successful");
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setMessage(error.response.data.message);
        } else {
          setMessage(
            "sorry....the backend server is down!! please try again later"
          );
        }
      });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h5>Register</h5>
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="form-input"
        />{" "}
        <br />
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="form-input"
        />{" "}
        <br />
        <label htmlFor="username" className="form-label">
          Username:
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="form-input"
        />{" "}
        <br />
        <label htmlFor="password" className="form-label">
          Password:
        </label>
        <input
          id="password"
          type="text"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="form-input"
        />{" "}
        <br />
        <input type="submit" value="Register" className="form-submit" />
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Register;
