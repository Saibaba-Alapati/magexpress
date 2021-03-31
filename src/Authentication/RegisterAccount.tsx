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
        <div className="registerPage">
            <img className="registerImage" src={CreateAccount} alt="createaccount"/>
            <div className="registerAccountForm">
                <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
                    <input className="inputFields" type="text" name="firstname" placeholder="firstname" ref={register}/>
                    <p className="errorText">{errors.firstname?.message}</p>

                    <input  className="inputFields" type="text" name="lastname" placeholder="lastname" ref={register}/>
                    <p className="errorText">{errors.lastname?.message}</p>

                    <input  className="inputFields" type="text" name="username" placeholder="username" ref={register}/>
                    <p className="errorText">{errors.username?.message}</p>

                    <input  className="inputFields" type="text" name="companyname" placeholder="companyname" ref={register}/>
                    <p className="errorText">{errors.companyname?.message}</p>

                    <input  className="inputFields" type="text" name="email" placeholder="email" ref={register}/>
                    <p className="errorText">{errors.email?.message}</p>

                    <input  className="inputFields" type="text" name="password" placeholder="password" ref={register}/>
                    <p className="errorText">{errors.password?.message}</p>

                    <input  className="inputFields" type="text" name="confirmpassword" placeholder="confirmpassword" ref={register}/>
                    <p className="errorText">{errors.confirmpassword?.message}</p>

                    <div style={{display:'flex',flexDirection:'row'}}>
                        <p className="alternateText">Already have and account?</p>
                    </div>
                    
                    <input className="buttonregister" type="submit" value="Register Account" />
                </form>
            </div>
        </div>
    );
}