import { useContext } from "react";
import "./Pay.css";
import { FaCartPlus } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { AppContext } from "../../AppContext";
export default function Pay() {
    const { handle_close, close, cart, sweetalert } = useContext(AppContext);
    var { Locallsum } = useContext(AppContext);
    return (
        <div className={`pay ${close ? 'activepay' : ''}`}>
            <div className="pay-box">
                <div className="btn-ult">
                    <button onClick={handle_close}><GrClose /></button>
                </div>
                <div className="Qi-pay">
                    <h1>Checkout</h1>
                </div>
                <div className="Qi-cart">
                    <span><FaCartPlus /></span>
                    {cart && cart.map((itempay) => (
                        Locallsum += itempay.price * itempay.qty,
                        <div ></div>
                    ))}
                    <h3 style={{ color: "green" }}>${Locallsum}</h3>
                </div>
                <div className="box_center_checkout">
                    <div className="checkout_left">
                        <div className="checkout_NameFull">
                            <div className="Namefull_label">
                                <label className="name-all" htmlFor="">Firt Name:</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className="Namefull_label">
                                <label className="name-all" htmlFor="">Last Name:</label>
                                <input type="text" name="" id="" />
                            </div>
                        </div>
                        <div className="checkout_all_input">
                            <label className="col-ed" htmlFor="">Address:</label>
                            <input type="text" />
                        </div>
                        <div className="checkout_all_input">
                            <label className="col-ed" htmlFor="">Country:</label>
                            <input type="text" />
                        </div>
                        <div className="checkout_all_input">
                            <label className="col-ed" htmlFor="">City:</label>
                            <input type="text" />
                        </div>
                        <div className="checkout_NameFull">
                            <div className="Namefull_label">
                                <label className="name-all" htmlFor="">Phone:</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className="Namefull_label">
                                <label className="name-all" htmlFor="">Email:</label>
                                <input type="text" name="" id="" />
                            </div>
                        </div>
                    </div>
                    <div className="checkout_right">
                        <div className="checkuot_products">
                            <div className="sol_rt2">
                                <p >Product</p>
                            </div>
                            <div className="sol_rt2">
                                <p >Total</p>
                            </div>
                        </div>
                        <div>
                            {cart && cart.map((totalitems, key) => (
                                <div className="checkuot_products" key={key}>
                                    <div className="sol_rt1">
                                        <p style={{ fontSize: "15px" }}>{totalitems.name}</p>
                                    </div>
                                    <div className="sol_rt1">
                                        <p style={{ fontSize: "15px" }}>${totalitems.price * totalitems.qty}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="cart-buynow">
                    <button onClick={sweetalert}>Pay</button>
                </div>
            </div>
        </div>
    )
}
