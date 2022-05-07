import React, { useRef } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import {useSignInWithEmailAndPassword,useSendPasswordResetEmail,} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import toast from 'react-hot-toast';
import axios from "axios";

const Login = () => {

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, errorReset] =
    useSendPasswordResetEmail(auth);

  let errorElement;

  if (loading || sending) {
    return <Spinner animation="grow" variant="dark" />;
  }

  if (error || errorReset) {
    errorElement = (
      <h5 className="text-danger m-4">Error: {error?.message} {errorReset?.message}</h5>
    );
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
    const {data} = await axios.post('http://localhost:5000/login', {email});
    console.log(data.accessToken);
    // localStorage.setItem("accessToken", data.accessToken);
    // navigate(from, { replace: true });
  };

  const naviToSignup = () => {
    navigate("/signup");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Sent email");
    } else {
      toast.error("There is no email address");
    }
  };


  if (user) {

  navigate(from, { replace: true });
  }

  return (
    <div className="container w-50 text-center mx-auto pt-4 m-auto">
      <h2>Login Page</h2>
      <Form onSubmit={handleSubmit} className="text-start pt-3 w-50 m-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Email Address"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button
          className="m-auto w-50 rounded-pill d-block"
          variant="outline-dark"
          type="submit"
        >
          Submit
        </Button>
      </Form>
      {errorElement}
      <p className="mt-4">
        New to FRUITY?{" "}
        <Link
          to="/signup"
          onClick={naviToSignup}
          className="text-warning text-decoration-none"
        >
          Please Signup
        </Link>
      </p>
      <p className="mt-4">
        Forget Password ?{" "}
        <button
          onClick={resetPassword}
          className="btn btn-link text-danger text-decoration-none"
        >
          Reset Password
        </button>
      </p>
    </div>
  );
};

export default Login;
