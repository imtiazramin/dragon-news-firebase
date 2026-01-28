import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext)
    const [nameError, setNameError] = useState('')
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        if (name.length < 5) {
            setNameError("name 5 charter er com")

        } else {
            setNameError('')
            return;
        }
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email, password)
            .then((result) => {
                const user = result.user
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({...user,displayName: name, photoURL: photo})
                    }).catch((error) => {
                        console.log(error)
                        setUser(user)
                    })

            }).catch(error => {

                const errorMessage = error.message;
                alert(errorMessage)
            })
    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Register your account</h2>
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">
                        {/* Name */}
                        <label className="label">Your Name</label>
                        <input type="text" name='name' required className="input" placeholder="Enter your name" />
                        {nameError && <p className='text-red-500'>{nameError}</p>}
                        {/* Photo URL */}
                        <label className="label">Photo URL</label>
                        <input type="url" name='photo' required className="input" placeholder="Photo URL" />
                        {/* Email */}
                        <label className="label">Email</label>
                        <input type="email" name='email' required className="input" placeholder="Email" />
                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password" name='password' required className="input" placeholder="Password" />
                        {/* <label className="label">
                            <input type="checkbox" className="checkbox" />
                            Accept Term & Conditions
                        </label> */}
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='text-center font-semibold  pt-3'>Already Have An Account ? <Link to='/auth/login' className=' text-secondary'>Login</Link> </p>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Register;