import { AppProvider } from "./AppContext";
import Header from "./compenentes/header/Header";
import Home from "./compenentes/home/Home";
import { Route, Routes, Navigate } from "react-router-dom"
import Product from "./compenentes/product/Product";
import Footer from "./compenentes/footer/Footer";
import Cart from "./compenentes/cart/Cart";
import Blog from "./compenentes/blog/Blog";
import SignIn from "./compenentes/Login/signin/SignIn";
import SignUp from "./compenentes/Login/signup/SignUp";
import Order from "./compenentes/order/Order";
import Scrolltop from "./compenentes/boostrap/scrolltotop/Scrolltotop";
import Contact from "./compenentes/contact/Contact";
import Protected from "./Protected";
import Checkout from "./compenentes/pay/Pay";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/"
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});


function App() {
    return (
        <div className="App">
            <AppProvider>
                <Header />
                <Routes>
                    <Route path="" element={<Home />}></Route>
                    <Route path="/home" element={<Protected Cmp={Home} />}></Route>
                    <Route path="/shop" element={<Protected Cmp={Product} />}></Route>
                    <Route path="/blog" element={<Protected Cmp={Blog} />}></Route>
                    <Route path="/cart" element={<Protected Cmp={Cart} />}></Route>
                    <Route path="/login" element={<SignIn />}></Route>
                    <Route path="/register" element={<SignUp />}></Route>
                    {/* <Route path="/login" element={localStorage.getItem('auth_token') ? <Navigate to="/" /> : <SignIn />}>

                    </Route>
                    <Route path="/register" element={localStorage.getItem('auth_token') ? <Navigate to="/" /> : <SignUp />}> */}

                {/* </Route> */}
                <Route path="/tracuu" element={< Protected Cmp={Order} />}></Route>
                <Route path="/contact" element={< Protected Cmp={Contact} />}></Route>
                <Route path="/checkout" element={< Protected Cmp={Checkout} />}></Route>

            </Routes>
            <Scrolltop />
            <Footer />
        </AppProvider>

        </div >
    );
}
export default App;
