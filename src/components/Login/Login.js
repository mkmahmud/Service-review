import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext/UserContext';

const Login = () => {

    const {login, googleLogIn} = useContext(AuthContext)

    const navigate = useNavigate()


    // Handel User Login with Email and Password
    const handelUserLogIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        login(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            navigate('/')
          })
          .catch((error) => {
            console.log(error)
          });
        console.log(email, password)
    }

    // Handel log in with Google 
    const handelLogInWithGoogle = () => {
        googleLogIn()
        .then((result) => {
            const user = result.user;
            console.log(user)
            navigate('/')
          }).catch((error) => {
              console.log(error)
          });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login!</h1>
                    <p className="py-6">MK is the digital learning platform. You can learn anythig by MK</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handelUserLogIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="googlelogin">
                            <p className='text-lg'>OR</p>
                            <button className='btn btn-success rounded my-5' onClick={handelLogInWithGoogle}><i class="fa-brands fa-google"></i></button>
                        </div>
                        <div className="alreadyhave">
                            <p>Are you New here  <Link to='/signup'><b>Sign Up</b></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;