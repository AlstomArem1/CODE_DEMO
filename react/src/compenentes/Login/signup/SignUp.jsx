import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";
import "./SignUp.css";
import key from "./khoalanthu2baomat.webp";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
function SignUp() {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const navigate = useNavigate();
    // const [errors, setErrors] = useState([]);
    const [valueRegister, setvalueRegister] = useState({
        name: '',
        email: '',
        password: '',
        error_list: [],
    });
    const handleRegister = (e) => {
        e.persist();
        setvalueRegister({ ...valueRegister, [e.target.name]: e.target.value });
    }

    const SubmitRegister = async(e) => {
        e.preventDefault();

        const data = {
            name: valueRegister.name,
            email: valueRegister.email,
            password: valueRegister.password,
        }
        await axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`/api/register`, data).then(res => {
                if (res.data.status === 200) {
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    swal("Success", res.data.message, "success");
                    navigate("/home")

                } else {
                    setvalueRegister({ ...valueRegister, error_list: res.data.validation_errors });
                }
            });
        });

    }
    // const sumbit_register = async () => {
    //     event.preventDefault();
    //     try {
    //         let result = await axios.post("http://localhost:8000/api/register", { name, email, password, password_confirm });
    //         setName("");
    //         setEmail("");
    //         setPassword("");
    //         setPasswordconfirm("");
    //         navigate("/home")

    //         // result = await result.json()
    //         localStorage.setItem('user-info', JSON.stringify(result))

    //     } catch (e) {
    //         if (e.response.status === 422) {
    //             setErrors(e.response.data.errors);
    //         }
    //     }
    // }
    useEffect(
        () => {
            if (localStorage.getItem('auth_token')) {
                navigate("/home")
            }
        }, []
    )

    return (
        <div className="Box-Register">
            <img src={key} alt="" width="100%" height="100%" />
            <div className="box-formRegister">
                <h4>Sign Up</h4>
                <form action="" className="form-register" onSubmit={SubmitRegister}>
                    <label htmlFor="">UserName:</label>
                    <input name="name" type="text" value={valueRegister.name} onChange={handleRegister} placeholder="Name" />
                    <small>{valueRegister.error_list.name}</small>
                    <label  htmlFor="">Email:</label>
                    <input name="email" type="email" value={valueRegister.email} onChange={handleRegister} placeholder="Email" />
                    <small>{valueRegister.error_list.email}</small>
                    <label htmlFor="">Password:</label>
                    <input name="password" type="password" value={valueRegister.password} onChange={handleRegister} placeholder="Password" />
                    <small>{valueRegister.error_list.password}</small>
                    <button type="submit" >SIGN UP</button>
                </form>

            </div>
        </div>
    );
}

export default SignUp;
