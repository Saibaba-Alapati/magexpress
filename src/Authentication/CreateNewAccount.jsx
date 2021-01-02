/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import CreateAccount from '/Users/saibabaalapati/Desktop/magexpress/src/Authentication/CreateAccount.png';
import {Controller, useForm,useRef} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const signupSchema= yup.object().shape({
    firstname:yup.string().required(),
    lastname:yup.string().required(),
    username:yup.string().required(),
    gender:yup.string().required(),
    companyname:yup.string(),
    email:yup.string().email().required(),
    password: yup.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.').matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    repeatpassword: yup.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.').matches(/[a-zA-Z]/, 'Password can only contain Latin letters.').oneOf([yup.ref("password"),null],'password fields are not in match with each other')
})
function Createaccount(){
    const {register,handleSubmit,errors,control} = useForm({
        resolver:yupResolver(signupSchema),
    });
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };
    
    return(
        <div className="body flex flex-row bg-gray-800 w-full h-screen">
            <img className=" bg-black w-3/5 h-full p-10" src={CreateAccount}></img>
            <div className=" h-full w-2/5">
                <div className="account flex flex-row w-full items-center justify-end p-10 space-x-4">
                    <h1 className=" text-white">Already have an account?</h1>
                    <button className=" bg-transparent text-white border p-2 rounded-lg border-blue-400 hover:border-blue-600">Youraccount</button>
                </div>
                <form className=" flex flex-col items-center p-10 space-y-4 text-white" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className=" bg-black p-2 w-1/2 outline-none"
                        type="text"
                        name = "firstname"
                        placeholder="Enter your firstname"
                        ref = {register}
                    />
                    <p>{errors.firstname && <p>{errors.firstname.message}</p>}</p>
                    <input
                        className=" bg-black p-2 w-1/2 outline-none"
                        type="text"
                        name = "lastname"
                        placeholder="Enter your lastname"
                        ref = {register}
                    />
                    <p>{errors.lastname && <p>{errors.lastname.message}</p>}</p>
                    <input
                        className=" bg-black p-2 w-1/2 outline-none"
                        type="text"
                        name = "username"
                        placeholder="Enter your username"
                        ref = {register}
                    />
                    <p>{errors.lastname && <p>{errors.lastname.message}</p>}</p>
                    <div class="relative flex flex-row w-1/2">
                        <select class=" appearance-none p-2 w-full bg-black outline-none" name="gender" ref={register}>
                            <option value="" disabled selected>Select your option</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <div className=" pointer-events-none bg-gray-700 p-2 rounded-r-lg">
                            <svg class="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>
                        </div>
                    </div>
                    <p>{errors.gender && <p>{errors.gender.message}</p>}</p>
                    <input
                        className=" bg-black p-2 w-1/2 outline-none"
                        type="text"
                        name = "companyname"
                        placeholder="Company name"
                        ref = {register}
                    />
                    <p>{errors.companyname && <p>{errors.companyname.message}</p>}</p>
                    <input
                        className=" bg-black p-2 w-1/2 outline-none"
                        type="text"
                        name = "email"
                        placeholder="Enter your email"
                        ref = {register}
                    />
                    <p>{errors.email && <p>{errors.email.message}</p>}</p>
                    <input
                        className=" bg-black p-2 w-1/2 outline-none"
                        type="password"
                        name = "password"
                        placeholder="Create Password"
                        ref = {register}
                    />
                    <p>{errors.password && <p>{errors.password.message}</p>}</p>
                    <input
                        className=" bg-black p-2 w-1/2 outline-none"
                        type="password"
                        name = "repeatpassword"
                        placeholder="Repeat Password"
                        ref = {register}
                    />
                    <p>{errors.repeatpassword && <p>{errors.repeatpassword.message}</p>}</p>
                    <button
                    className="bg-blue-400 rounded-xl p-2 w-1/3 hover:bg-blue-500"
                    >
                        Createaccount
                    </button>
                    <button className=" bg-transparent text-red-50">
                        Forgot Password?
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Createaccount;