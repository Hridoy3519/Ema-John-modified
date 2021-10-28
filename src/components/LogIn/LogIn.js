import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./login.css";

const LogIn = () => {
  const { signInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || '/shop';

  const handleGoogleSinIn = () => {
    signInWithGoogle()
      .then((result) => {
        history.push(redirect_url);
      });
  };
  return (
    <div className="w-100" style={{ maxWidth: "480px" }}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <button className="btn-regular w-100 login-btn">Log In</button>
          </Form>
          <div className="text-center mt-2">
            Need an Account? <Link to="/signup">Sign Up</Link>
          </div>
          <div className="text-center mt-2">
            <Button onClick={handleGoogleSinIn}>Google Sign In</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LogIn;
