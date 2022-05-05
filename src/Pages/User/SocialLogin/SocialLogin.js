import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
  
    const navigate = useNavigate();
    let errorElement;
  
    if (loading) {
      return <Spinner animation="grow" variant="dark" />;
    }
  
    if (error) {
      errorElement = (
        <h5 className="text-danger">
          Error: {error?.message}
        </h5>
      );
    }
    if (user) {
      navigate(from, { replace: true });
    }
    return (
        <div className="mt-2">
      <div className="d-flex align-items-center">
        <div className="bg-dark w-50" style={{ height: "1px" }}></div>
        <p className="mt-2 p-2">or</p>
        <div className="bg-dark w-50" style={{ height: "1px" }}></div>
      </div>
      {errorElement}
      <div className="">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-light w-50 d-block m-auto my-2 rounded-pill"
        >
          <img src='https://i.ibb.co/fHCHfpc/google.png' alt="" srcSet="" />
          <span className="px-2">Sign up with Google</span>
        </button>
      </div>
    </div>
    );
};

export default SocialLogin;