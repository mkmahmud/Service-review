import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext/UserContext';

const SignUp = () => {

    const { createUser, updateUser, createUserGoogle } = useContext(AuthContext)

    const navigate = useNavigate()

    // Handel user sign up with email password
    const handelUserSignUp = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;

        const userProfileData = { displayName: name, photoURL: photoURL }

        form.reset()

        // Createing User
        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateUser(userProfileData)
                    .then(() => {
                        console.log('updated')
                        navigate('/')
                    }).catch((error) => {
                        console.log(error)
                    });

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

            });

        console.log(name, email, password)
    }


    // Handel user signup with Google 
    const handelGoogleSignUp = () => {
        createUserGoogle()
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

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handelUserSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" required name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" required name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Profile Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo Url" required name='photoURL' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" required name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>

                        </form>
                        <div className="googlelogin">
                            <p className='text-lg'>OR</p>
                            <button className='btn btn-success rounded my-5' onClick={handelGoogleSignUp}><i class="fa-brands fa-google"></i></button>
                        </div>
                        <div className="alreadyhave">
                            <p>Already have an account <Link to='/login'><b>log In</b></Link></p>
                        </div>
                    </div>
                </div>
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up</h1>
                    <p className="py-6">MK is the digital learning platform. You can learn anythig by MK</p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;