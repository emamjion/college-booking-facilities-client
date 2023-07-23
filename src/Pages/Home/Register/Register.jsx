// import React from 'react';

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../../../components/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            updateUserProfile(data.name)
            .then(() => {})
            .catch(error => console.log(error.message))

            reset();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'User has been created!',
                showConfirmButton: false,
                timer: 1500
            })
        })
        .catch(error => console.log(error.message))
    };
    
    return (
        <div className="background-img flex items-center justify-center">
            <div className='bg-white w-[400px] h-[490px]'>
                <h2 className='login-text text-3xl font-semibold text-center mt-6 my-8'>Register</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='text-center'>
                    <div>
                        <input 
                            type="text" 
                            placeholder='Name' 
                            className='px-4 w-[250px] py-2 border border-black bg-transparent'
                            {...register("name", { required: true })}
                        />
                    </div>
                    <div className="mt-4">
                        <input 
                            type="email" 
                            placeholder='Email Id' 
                            className='px-4 w-[250px] py-2 border border-black bg-transparent'
                            {...register("email", { required: true })}
                        />
                    </div>
                    <div className='mt-4 mb-6'>
                        <input 
                            type="password" 
                            placeholder='Password' 
                            className='px-4 w-[250px] py-2 border border-black bg-transparent'
                            {...register("password", { required: true })}
                        />
                    </div>
                    <input type="submit" value="Register" className="border border-black px-10 py-3 font-medium hover:bg-[#f46565] hover:border-[#f46565] hover:text-white cursor-pointer transition-all duration-500" />
                </form>
                <p className='text-center mt-4 font-medium'>Already Have any account? <Link className='text-[#f46565]' to='/login'>Login</Link></p>
                <SocialLogin/>
            </div>
        </div>
    );
};

export default Register;