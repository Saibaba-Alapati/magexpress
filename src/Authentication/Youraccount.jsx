/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import setintro from '/Users/saibabaalapati/Desktop/magexpress/src/Authentication/setintro.png';
import {useForm} from 'react-hook-form';
function Youraccount(){
    const {register,handleSubmit,errors,control} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return(
        <div className="body flex flex-row bg-gray-800 w-full h-screen text-white">
            <img className=" bg-black w-3/5 h-full" src={setintro}></img>
            <div className=" h-full w-2/5">
                <div className="account flex flex-row w-full items-center justify-end p-10 space-x-4">
                    <h1 className=" text-white">Donot have account?</h1>
                    <button className=" bg-transparent text-white border p-2 rounded-lg border-green-300 hover:border-green-600">Createaccount</button>
                </div>
                <form className=" flex flex-col items-center p-10 space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <input
                    className=" bg-black p-2 outline-none w-1/2"
                    type="text"
                    name = "username"
                    placeholder="Username"
                    ref = {register}
                    />
                    <input
                    className=" bg-black p-2 outline-none w-1/2"
                    type="password"
                    name = "password"
                    placeholder = "Password"
                    ref = {register}
                    />
                    <button
                    className="bg-green-400 rounded-xl p-2 w-1/3 hover:bg-green-500"
                    >
                        Goto Account
                    </button>
                    <button className=" bg-transparent text-red-50">
                        Forgot Password?
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Youraccount;