import './SignIn.css';
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";
import song from "./cartoon1.jpg"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';



function SignIn() {
    // const [email, setEmail] = useState("");
    // const [name, setName] = useState("");
    // const [password, setPassword] = useState("");
    // const [errors, setErrors] = useState([]);
    // const [errortt, setErrortt] = useState([]);

    const navigate = useNavigate();

    const [valueLogin, setvalueLogin] = useState({
        email: '',
        password: '',
        error_list: [],
    });
    const handleLogin = (e) => {
        e.persist();
        setvalueLogin({ ...valueLogin, [e.target.name]: e.target.value });
    }

    // const sumbit_login = async (event)=>{
    //     event.preventDefault();


    //     try{
    //         console.warn(email, password);
    //         // let item = {email, password};
    //         let result = await axios.post("http://localhost:8000/api/login", {email, password});

    //         setEmail("");
    //         setPassword("");
    //         navigate("/home");
    //         localStorage.setItem('user-info', JSON.stringify(result))

    //     }
    //     catch (e){
    //         if(e.response.status === 422){
    //             setErrors(e.response.data.errors);
    //         }
    //         if(e.response.status === 424) {
    //             setErrortt(e.response.data.errortt);
    //         }

    //     }

    // }
    const SumbitLogin = (e) => {
        e.preventDefault();
        const data = {
            email: valueLogin.email,
            password: valueLogin.password,
        }
        axios.post(`/api/login`, data).then(res => {
            if (res.data.status === 200) {
                localStorage.setItem('auth_token', res.data.token);
                localStorage.setItem('auth_name', res.data.username);
                swal("Success", res.data.message, "success");
                navigate("/home")

            } else if (res.data.status === 401) {
                swal("Warning", res.data.message, "warning");

            } else {
                setvalueLogin({ ...valueLogin, error_list: res.data.validation_errors });
            }
        });
    }


    useEffect(
        () => {
            if (localStorage.getItem('auth_token')) {
                navigate("/home")
            }
        }, []);


    return (
        <div className='SignIn'>
            <div className='Signin-left'>
                <img src={song} />
            </div>
            <div className='Signin-right'>
                <div className='Signin-container'>
                    <h1 style={{ fontSize: "30px", fontWeight: "600", color: "#fff" }}>SignIn</h1>
                    <p style={{ color: "#999" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <form className='Sign-form' action='' onSubmit={SumbitLogin}>
                        <input name='email' type='email' value={valueLogin.email} onChange={handleLogin} placeholder='Email/SDT' />
                        <span>{valueLogin.error_list.email}</span>
                        <input name='password' type='password' value={valueLogin.password} onChange={handleLogin} placeholder='PassWord' />

                        <span>{valueLogin.error_list.password}</span>

                        <br />
                        {/* { errortt &&  (
                 <span>{errortt}</span>
            )} */}
                        <div className='checkbox-radio'>
                            <input type="checkbox" />
                            <label htmlFor="">remember login</label>
                        </div>
                        <button type='submit' className='button-sign' >LogIn</button>
                    </form>

                    <Link to="/register" className='button-signup'>SignUp</Link>
                    <div className='or-sign'>
                        <span>-</span><p>or</p><span>-</span>
                    </div>
                    <button className='Signin-Facebook'><span><FaFacebookF /></span>Login with Facebook</button>
                    <button className='Signin-Twitter'><span><AiOutlineTwitter /></span>Login with Twitter</button>
                    <button className='Signin-Google'><span><BsGoogle /></span>Login with Google</button>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
