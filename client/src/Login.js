import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import logo from "./mercury.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login rounded-lg shadow bg-white rounded">
      <img className="logo mb-2" src={logo}></img>
      <h1 className="logoFont mb-3"> Mercury</h1>
      <h5 className="logoFont mb-3"> -reimagine office hours-</h5>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <FormControl
            autoFocus
            type="email"
            value={email}
            placeholder="School Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            type="password"
          />
        </FormGroup>
        <Button
          block
          bsSize="large"
          disabled={!validateForm()}
          type="button"
          className="btn btn-warning mt-5"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
