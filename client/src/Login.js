import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";

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
          <FormLabel></FormLabel>
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            type="password"
          />
          <FormLabel></FormLabel>
        </FormGroup>
        <Button
          block
          bsSize="large"
          disabled={!validateForm()}
          type="button"
          className="btn btn-warning"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
