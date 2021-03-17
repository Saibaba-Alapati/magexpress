import CreateAccount from '/Users/saibabaalapati/Desktop/magexpress/src/Authentication/CreateAccount.png';
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup'
import {useForm} from 'react-hook-form';
interface IRegisterFormInputs {
    firstname: string,
    lastname: string,
    username: string,
    companyname: string,
    email: string,
    password: string,
    confirmpassword: string
}
const registerSchema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    username: yup.string().required(),
    companyname: yup.string(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirmpassword: yup.string().required(),
});
export default function RegisterAccount():any {
    const {register,handleSubmit, errors} = useForm<IRegisterFormInputs>({
        resolver: yupResolver(registerSchema)
    })
    const onSubmit = (data: IRegisterFormInputs) => console.log(data);
    return(
        <div className="registerPage flex flex-row h-screen bg-black">
            <img className="registerImage w-5/6" src={CreateAccount} alt="createaccount"/>
            <div className="registerAccountForm flex items-center bg-gray-900 w-full h-full">
                <form className="registerForm flex flex-col w-full h-1/2 space items-center" onSubmit={handleSubmit(onSubmit)}>
                    <input className="rounded-md p-5 bg-black w-1/2 text-white text-3xl font-light py-4 m-4" type="text" name="firstname" placeholder="firstname" ref={register}/>
                    <p className="text-red-600 text-2xl">{errors.firstname?.message}</p>

                    <input  className="rounded-md p-5 bg-black w-1/2 text-white text-3xl font-light py-4 m-4" type="text" name="lastname" placeholder="lastname" ref={register}/>
                    <p className="text-red-600 text-2xl">{errors.lastname?.message}</p>

                    <input  className="rounded-md p-5 bg-black w-1/2 text-white text-3xl font-light py-4 m-4" type="text" name="username" placeholder="username" ref={register}/>
                    <p className="text-red-600 text-2xl">{errors.username?.message}</p>

                    <input  className="rounded-md p-5 bg-black w-1/2 text-white text-3xl font-light py-4 m-4" type="text" name="companyname" placeholder="companyname" ref={register}/>
                    <p className="text-red-600 text-2xl">{errors.companyname?.message}</p>

                    <input  className="rounded-md p-5 bg-black w-1/2 text-white text-3xl font-light py-4 m-4" type="text" name="email" placeholder="email" ref={register}/>
                    <p className="text-red-600 text-2xl">{errors.email?.message}</p>

                    <input  className="rounded-md p-5 bg-black w-1/2 text-white text-3xl font-light py-4 m-4" type="text" name="password" placeholder="password" ref={register}/>
                    <p className="text-red-600 text-2xl">{errors.password?.message}</p>

                    <input  className="rounded-md p-5 bg-black w-1/2 text-white text-3xl font-light py-4 m-4" type="text" name="confirmpassword" placeholder="confirmpassword" ref={register}/>
                    <p className="text-red-600 text-2xl">{errors.confirmpassword?.message}</p>

                    <div className="flex flex-row">
                        <p className="text-white text-2xl py-4">Already have and account?</p>
                    </div>
                    
                    <input className="buttonregister rounded-md p-2 bg-purple-900 text-white text-2xl w-1/2" type="submit" value="Register Account" />
                </form>
            </div>
        </div>
    );
}