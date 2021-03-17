import CreateAccount from '/Users/saibabaalapati/Desktop/magexpress/src/Authentication/CreateAccount.png';
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from 'react-hook-form';
import { useState } from 'react';
interface ILoginFormInputs {
    username: string,
    password: string,
}
const loginSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
});
export default function YourAccount():any {
    const {register,handleSubmit, errors} = useForm<ILoginFormInputs>({
        resolver: yupResolver(loginSchema)
    })
    const onSubmit = (data: ILoginFormInputs) => console.log(data);
    return(
        <div className="registerPage flex flex-row h-screen bg-black">
            <img className="registerImage w-5/6" src={CreateAccount} alt="createaccount"/>
            <div className="registerAccountForm flex items-center bg-gray-900 w-full h-full">
                <form className="registerForm flex flex-col w-full h-1/2 space items-center" onSubmit={handleSubmit(onSubmit)}>
                    <input  className="rounded-md p-5 bg-black w-1/2 text-white text-3xl font-light py-4 m-4" type="text" name="username" placeholder="username" ref={register}/>
                    <p className="text-red-600 text-2xl">{errors.username?.message}</p>

                    <input className="rounded-md p-5 bg-black w-1/2 text-white text-3xl font-light py-4 m-4" type="text" name="password" placeholder="password" ref={register}/>
                    <p className="text-red-600 text-2xl">{errors.password?.message}</p>
                    <div className="flex flex-row">
                        <p className="text-white text-2xl py-4">Don't have and account?</p>
                    </div>
                    
                    <input className="buttonregister rounded-md p-5 bg-purple-900 text-white text-3xl w-1/12" type="submit" value="Go to Account" />
                </form>
            </div>
        </div>
    );
}