// import React from 'react';
import { useForm } from "react-hook-form"
import Swal from "sweetalert2";

const img_hosting_token=import.meta.env.VITE_Image_Upload_Token;


const AddmissionForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    const onSubmit = data => {
        // console.log(data);
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgRes => {
            if(imgRes.success){
                const imgUrl = imgRes.data.display_url;
                const { name, subject, phone, address, email, date } = data;
                const user = {name, subject, phone, address, date, email, image:imgUrl};
                // console.log(user);
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Admission Form has been Submitted',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
            }
        })
    };
    
    
    return (
        <div className="px-[160px] pt-[120px]">
            <div className="mb-12">
                <h1 className='about-heading text-center font-semibold text-3xl mb-3'><span className='text-[#f46565]'>Admission Form</span></h1>
                <p className="text-center tracking-wide mt-5">
                    It&apos;s important to carefully read and follow the instructions provided with the admission form  <br />to ensure that all necessary information is provided correctly and that the application process <br /> goes smoothly. Additionally, make sure to double-check the deadline <br /> for submission to avoid missing out on the opportunity to apply.
                </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-12 bg-red-50 p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="w-full">
                        <span className="block text-lg font-medium mb-2">Candidate Name</span>
                        <input 
                            className="w-full px-6 py-3" 
                            type="text" 
                            placeholder="Candidate Name Here"
                            {...register("name", {required: true})} 
                        />
                    </div>
                    <div className="w-full">
                        <span className="block text-lg font-medium mb-2">Subject</span>
                        {/* <input type="text" className="w-full px-6 py-3" placeholder="Subject Here" /> */}
                        <select 
                            className="select select-error w-full max-w-xs"
                            {...register("subject", { required: true })}
                            defaultValue='Choose your Subject'
                        >
                            <option disabled>Choose your Subject</option>
                            <option>CSE</option>
                            <option>EEE</option>
                            <option>BBA</option>
                            <option>English</option>
                            <option>MSJ</option>
                            <option>Physics</option>
                            <option>Economics</option>
                            <option>Math</option>
                        </select>
                    </div>
                    <div className="w-full">
                        <span className="block text-lg font-medium mb-2">Candidate Email</span>
                        <input 
                            type="email" 
                            className="w-full px-6 py-3" 
                            placeholder="Candidate Email Here" 
                            {...register("email", {required: true})}
                        />
                    </div>
                    <div className="w-full">
                        <span className="block text-lg font-medium mb-2">Candidate Phone Number</span>
                        <input 
                            type="text" 
                            className="w-full px-6 py-3" 
                            placeholder="Candidate Phone Number Here"
                            {...register("phone", {required: true})} 
                        />
                        </div>
                    <div className="w-full">
                        <span className="block text-lg font-medium mb-2">Address</span>
                        <input 
                            type="text" 
                            className="w-full px-6 py-3" 
                            placeholder="Address Here"
                            {...register("address", {required: true})}
                        />
                    </div>
                    <div className="">
                        <span className="block text-lg font-medium mb-2">Date of Birth</span>
                        <input 
                            className="w-full px-6 py-3" 
                            type="date"
                            {...register("date", {required: true})}
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <input 
                        type="file" 
                        className="file-input file-input-bordered w-full max-w-xs"
                        {...register("image", {required: true})} 
                    />
                </div>
                <div className="w-full mt-6">
                    <input className="px-6 py-3 cursor-pointer font-medium bg-[#f46565] text-white w-full hover:border hover:border-[#f46565] hover:bg-transparent transition-all duration-500 hover:text-black" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default AddmissionForm;