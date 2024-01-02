import './SignIn.css';
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";
import song from "./cartoon1.jpg"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';



function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [error, setError] = useState([]);

    const navigate = useNavigate();

    const handleLogin = async (event) => {
        // event.preventDefault();

        // try{
        //     await axios.post("http://localhost:8000/api/login", {email, password});
        //     setEmail("");
        //     setPassword("");
        //     navigate("/home");

        // } catch (e) {
        //    if(e.response.status === 422){
        //     setErrors(e.response.data.errors);
        //    }
        // }

    }
    const sumbit_login = async (event)=>{
        event.preventDefault();


        try{
            console.warn(email, password)
            // let item = {email, password};
            let result = await axios.post("http://localhost:8000/api/login", {email, password});
            setEmail("");
            setPassword("");
            // navigate("/home");
            localStorage.setItem('user-info', JSON.stringify(result))

        }
        catch (e){
            if(e.response.status === 422){
                setErrors(e.response.data.errors);
            }


        }
    }


  return (
    <div className='SignIn'>
      <div className='Signin-left'>
        <img src={song}/>
      </div>
      <div className='Signin-right'>
        <div className='Signin-container'>
          <h1 style={{ fontSize: "30px", fontWeight: "600", color:"#fff" }}>SignIn</h1>
          <p style={{ color: "#999" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <form className='Sign-form' action='' onSubmit={sumbit_login}>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email/SDT' />
            { errors.email &&  (
                 <span>{errors.email[0]}</span>
            )}
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='PassWord' />
            { errors.password &&  (
                 <span>{errors.password[0]}</span>
            )}

            <div className='checkbox-radio'>
                <input type="checkbox" />
                <label htmlFor="">remember login</label>
            </div>
            <button type='submit' className='button-sign' >LogIn</button>
          </form>

          <Link to="/signup" className='button-signup'>SignUp</Link>
          <div className='or-sign'>
            <span>-</span><p>or</p><span>-</span>
          </div>
          <button className='Signin-Facebook'><span><FaFacebookF/></span>Login with Facebook</button>
          <button className='Signin-Twitter'><span><AiOutlineTwitter/></span>Login with Twitter</button>
          <button className='Signin-Google'><span><BsGoogle/></span>Login with Google</button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
