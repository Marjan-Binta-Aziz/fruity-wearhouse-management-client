import React from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Signup = () => {
    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const navigateLogin = () =>{
        navigate('/login');
    }

    const [createUserWithEmailAndPassword,user,loading,error] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});


        //control submission time page reload
    const handleRegistrationSubmit = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    
    }

    if (loading) {
        return  <Spinner animation="grow" variant="dark" />

        }
    if(user){
        //condition for login user
        navigate(from, { replace: true });
    }

    return (
        <div className="container w-50 text-center mx-auto pt-4 m-auto">
        <h2>Signup Page</h2>
        <Form onSubmit={handleRegistrationSubmit}  className='container form-container mt-3'>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control name="name" type="text" placeholder="Your Name" required />
        </Form.Group>                
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control name="email" type="email" placeholder="Email Address" required />
        </Form.Group>                
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control name="password" type="password" placeholder='Password' required />
        </Form.Group>
        <Button
          className="m-auto w-50 rounded-pill d-block text-black"
          variant="outline-light"
          type="submit"
        >
          SighUp
        </Button>
                
            </Form>
            <p className='pt-3'>Already Signup? <Link to='/login' onClick={navigateLogin}  className="text-warning text-decoration-none">Please Login</Link></p>
      </div>
    );
};

export default Signup;