import CreateAccount from '/Users/saibabaalapati/Desktop/magexpress/src/Authentication/CreateAccount.png';
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from 'react-hook-form';
import './youraccount.scss';
// import { useState } from 'react';
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
        <div className="registerPage">
            <img className="registerImage" src={CreateAccount} alt="createaccount"/>
            <div className="registerAccountForm">
                <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
                    <input  className="inputFields" type="text" name="username" placeholder="username" ref={register}/>
                    <p className="errorText">{errors.username?.message}</p>

                    <input className="inputFields" type="text" name="password" placeholder="password" ref={register}/>
                    <p className="errorText">{errors.password?.message}</p>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <p style={{color:'white',fontSize:'larger',paddingBottom:'20px',paddingTop:'20px'}}>Don't have and account?</p>
                    </div>
                    <input className="buttonregister" type="submit" value="Go to Account" />
                </form>
            </div>
        </div>
    );
}