import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";
import "./SignUp.css";
import key from "./khoalanthu2baomat.webp";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirm, setPasswordconfirm] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);


    const handleRegister = async (event) => {
        // event.preventDefault();
        // try{
        //     await axios.post("http://localhost:8000/api/register", {name, email, password, password_confirm});
        //     setName("");
        //     setEmail("");
        //     setPassword("");
        //     setPasswordconfirm("");
        //     navigate("/home");

        // } catch (e) {
        //     if(e.response.status === 422){
        //         setErrors(e.response.data.errors);
        //        }
        // }
    }
    const sumbit_register = async () => {
        event.preventDefault();
        try {
            let result = await axios.post("http://localhost:8000/api/register", { name, email, password, password_confirm });
            setName("");
            setEmail("");
            setPassword("");
            setPasswordconfirm("");
            navigate("/home")

            // result = await result.json()
            localStorage.setItem('user-info', JSON.stringify(result))

        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
            }
        }
    }
    useEffect(
        () => {
            if (localStorage.getItem('user-info')) {
                navigate("/home")
            }
        }, []
    )

    return (
        <div className="Box-Register">
            <img src={key} alt="" width="100%" height="100%" />
            <div className="box-formRegister">
                <h4>Sign Up</h4>
                <form action="" className="form-register" onSubmit={sumbit_register}>
                    <label htmlFor="">UserName:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                    {errors.name && (
                        <span>{errors.name[0]}</span>
                    )}
                    <label htmlFor="">Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    {errors.email && (
                        <span>{errors.email[0]}</span>
                    )}
                    <label htmlFor="">Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    {errors.password && (
                        <span>{errors.password[0]}</span>
                    )}
                    <label htmlFor="">CofirmPass:</label>
                    <input type="password" value={password_confirm} onChange={(e) => setPasswordconfirm(e.target.value)} placeholder="Password Confirm" />
                    <button type="submit" onClick={sumbit_register}>SIGN UP</button>
                </form>

            </div>
        </div>
    );
}

export default SignUp;
