// import React from 'react';

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../../../components/SocialLogin";

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    
    return (
        <div className="background-img flex items-center justify-center">
            <div className='bg-white w-[400px] h-[470px]'>
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