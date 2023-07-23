// import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { useForm } from "react-hook-form";
import SocialLogin from '../../../components/SocialLogin';
import { useContext, useRef } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const { logIn, resetEmail } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const emailRef = useRef();
    const from = location.state?.from?.pathname || '/';

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        logIn(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Login Successfully',
                showConfirmButton: false,
                timer: 1500
            })
            reset();
            navigate(from, {replace: true})
        })
        .catch(error => console.error(error.message))
    };

    const handleResetPassword = () => {
        const email = emailRef.current.value;
        if(!email){
            toast.warn("Please check your Email", {
                position : 'top-center',
                theme: 'light'
            });
            return;
        }
        resetEmail(email)
        .then(() => {
            toast.success("Please check your Email", {
                position : 'top-center',
                theme: 'dark'
            });
        })
        .catch(error => console.log(error.message))
    }

    
    
    return (
        <div className="background-img flex items-center justify-center">
            <div className='bg-white w-[400px] h-[480px]'>
                <h2 className='login-text text-3xl font-semibold text-center mt-6 my-8'>Login</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='text-center'>
                    <div>
                        <input 
                            type="email" 
                            placeholder='Email Id' 
                            className='px-4 w-[250px] py-2 border border-black bg-transparent'
                            {...register("email", { required: true })}
                            // ref={emailRef} --> TODO: 
                        />
                    </div>
                    <div className='mt-4 mb-6'>
                        <input 
                            type="password" 
                            placeholder='Password' 
                            className='px-4 w-[250px] py-2 border border-black bg-transparent mb-2'
                            {...register("password", { required: true })}
                        />
                        <p className='text-right text-sm mr-4'>Lost Password? <span onClick={handleResetPassword} className='text-[#f46565] cursor-pointer'>Click Here!</span></p>
                    </div>
                    <input type="submit" value="Login" className="border border-black px-10 py-3 font-medium hover:bg-[#f46565] hover:border-[#f46565] hover:text-white cursor-pointer transition-all duration-500" />
                </form>
                <p className='text-center mt-4 font-medium'>Donot Have any account? <Link className='text-[#f46565]' to='/register'>Register</Link></p>
                <SocialLogin/>
            </div>

            {/* React toastify */}
            <ToastContainer />
        </div>
    );
};

export default Login;