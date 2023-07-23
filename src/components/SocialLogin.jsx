// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { githubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleGithubLogin = () => {
        githubSignIn()
        .then(result => {
            const loggedGithub = result.user;
            console.log(loggedGithub);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Login Successfully',
                showConfirmButton: false,
                timer: 1500
            })
            navigate(from, {replace: true})
        })
        .catch(error => console.log(error.message))
    }
    
    return (
        <div className='mt-8 text-center'>
            <span onClick={handleGithubLogin} className="border border-black px-10 py-3 font-medium hover:bg-[#f46565] hover:border-[#f46565] hover:text-white cursor-pointer transition-all duration-500">Login With Github</span>
        </div>
    );
};

export default SocialLogin;