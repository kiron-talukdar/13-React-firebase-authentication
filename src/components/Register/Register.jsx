import { useState } from 'react';
import auth from '../../Firebase/firebase.config'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);    // define a state to show password, and default value is "false"

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        // password should be 6 cheracter showing error, // this will give error first if the password is less then 6 cheracter.
        // eii validation server side e jauyar agei kora hoilo, 
        if (password.length < 6) {
            setRegisterError('password should be more then 6 cheracter.');
            return;
        }
        else if (! /[A-Z]/.test(password)) {
            setRegisterError('Your password should have atleast one uppercase cheracter')
            return;
        }

        // reset error
        setRegisterError('');
        // reset success
        setRegisterSuccess('');

        // create a user.
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setRegisterSuccess('User Register Successfully Done');
            })

            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
                setRegisterError(errorMessage)
            })
    }
    return (
        <div className="text-center ">
            <h3 className=" text-3xl">Please Register</h3>

                <form onSubmit={handleRegister} className='flex flex-col justify-center items-center ' >
                    <input className="border-2 mt-3  p-2 w-2/4 rounded-lg" type="email" name="email" id="" placeholder="Email" required />
                    <br />

                    <input
                        className="border-2 mt-3  p-2 w-2/4 rounded-lg" type={showPassword ? 'text' : "password"}
                        name="password"id=""placeholder="Password" required />
                    <br />

                    <span  onClick={() => setShowPassword(!showPassword)} > hi
                        {
                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                        }
                    </span>
                    <br />
                    <input type="checkbox" name='terms' id='' />

                    <button className="btn btn-success mt-2 w-2/4 ">Register</button>
                </form>

                {
                    registerError && <p className='text-red-600 font-bold'>{registerError}</p> /* showing error */
                }
                {
                    registerSuccess && <p className='text-green-500'> {registerSuccess} </p>  /* showing success */
                }
        </div>
    );
};
export default Register;

