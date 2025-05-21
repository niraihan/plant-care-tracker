import React from 'react';
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import useTitle from '../hooks/useTitle';
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    // useTitle("JobTrack - Register");


    const { createUser, updateUserProfile, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const passwordValid = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordValid.test(password)) {
            return toast.error("Password must contain uppercase, lowercase, and be at least 6 characters");
        }

        createUser(email, password)
            .then(() => {
                return updateUserProfile(name, photo);
            })
            .then(() => {
                toast.success("Registered Successfully!");
                navigate("/");
            })
            .catch(err => toast.error(err.message));
    };

    const handleGoogleRegister = () => {
        googleLogin()
            .then(() => {
                toast.success("Google login successful!");
                navigate("/");
            })
            .catch(() => toast.error("Google login failed"));
    };

    return (
        <div className="hero min-h-screen bg-cover bg-center rounded-2xl" style={{backgroundImage:"url('/reg3.avif')"}}>
            <div className="card w-full max-w-sm shadow-2xl bg-blue-200">
                <h2 className="text-center text-2xl font-bold mt-6">Register</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <input type="text" name="name" placeholder="Full Name" className="input input-bordered" required />
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    <div className="form-control mt-4">
                        <button className="btn bg-red-600 btn-sm border-0 text-white ">Register</button>
                    </div>
                </form>
                <div className="text-center mb-2">
                    <button onClick={handleGoogleRegister} className="btn btn-outline btn-sm">
                    <FcGoogle size={20} /> Register with Google
                    </button>
                </div>
                <p className="text-center text-[12px] mb-4">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 link">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
