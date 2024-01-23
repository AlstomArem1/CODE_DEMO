import { useContext, useEffect, useState } from "react";
import "./Pay.css";
import { FaCartPlus } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { AppContext } from "../../AppContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Pay() {
    const { handle_close, close, cart, sweetalert,checkoutInput,handle_paymaent,errors1, handle_inputs,SubmitSCate
    } = useContext(AppContext);
    var { Locallsum } = useContext(AppContext);
    const user = localStorage.getItem('auth_name');

    return (
        <div className={`pay ${close ? 'activepay' : ''}`}>
            <div className="pay-box" onSubmit={sweetalert}>
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
                        <div></div>
                    ))}
                    <h3 style={{ color: "green" }}>${Locallsum}</h3>
                </div>
                <form className="box_center_checkout" onSubmit={handle_paymaent}>
                    <div className="box-ktra">
                        <div className="checkout_left">
                            <div className="checkout_all_input">
                                <label className="col-ed" htmlFor="" >UserName: <small style={{ color: "red", fontSize: '12px' }}>{errors1.username}</small></label>

                                <input disabled name="username"  type="text" value={user} onChange={handle_inputs} />

                            </div>
                            <div className="checkout_all_input">
                                <label className="col-ed" htmlFor="" >Address: <small style={{ color: "red", fontSize: '12px' }}>{errors1.address}</small></label>
                                <input name="address" type="text" value={checkoutInput.address} onChange={handle_inputs} />

                            </div>
                            <div className="checkout_all_input">
                                <label className="col-ed" htmlFor="" >Country: <small style={{ color: "red", fontSize: '12px' }}>{errors1.country}</small></label>
                                <input name="country" type="text" value={checkoutInput.country} onChange={handle_inputs} />

                            </div>
                            <div className="checkout_all_input">
                                <label className="col-ed" htmlFor="" >City: <small style={{ color: "red", fontSize: '12px' }}>{errors1.city}</small></label>
                                <input name="city" type="text" value={checkoutInput.city} onChange={handle_inputs} />

                            </div>
                            <div className="checkout_NameFull">
                                <div className="Namefull_label">
                                    <label className="name-all" htmlFor="" >Phone:</label>
                                    <input name="phone" type="number" value={checkoutInput.phone} onChange={handle_inputs} />
                                    <small style={{ color: "red", fontSize: '12px' }}>{errors1.phone}</small>
                                </div>
                                <div className="Namefull_label">
                                    <label className="name-all" htmlFor="" >Email:</label>
                                    <input type="email" name="email" id="email" value={checkoutInput.email} onChange={handle_inputs} />
                                    <small style={{ color: "red", fontSize: '12px' }}>{errors1.email}</small>
                                </div>
                            </div>
                            <div className="checkout_all_input">
                                <label className="col-ed" htmlFor="" >Note:<small style={{ color: "red", fontSize: '12px' }}>{errors1.note}</small></label>
                                <input name="note" type="text" value={checkoutInput.note} onChange={handle_inputs} />
                            </div>
                            <div className="pay_checkout_NameFull">
                                <div className="pay_radio">
                                    <input type="radio" name="checkradio" id="checkradio" />
                                    <label htmlFor="">Momo</label>
                                </div>
                                <div className="pay_radio">
                                    <input type="radio" name="checkradio" id="checkradio" />
                                    <label htmlFor="">Paypal</label>
                                </div>
                            </div>

                        </div>
                        <div className="checkout_right">
                            <div className="checkuot_products">
                                <div className="sol_rt1">
                                    <p>Product</p>
                                </div>
                                <div className="sol_rt3">
                                    <p>Qty</p>
                                </div>
                                <div className="sol_rt2">
                                    <p>Total</p>
                                </div>
                            </div>
                            <div className="checkuot-voxmar">
                                {cart && cart.map((indexpay, key) => (

                                    <div className="checkuot_productsbt2" key={key}>
                                        <div className="sol_rt1" >
                                            <p>{indexpay.name}</p>
                                        </div>
                                        <div className="sol_rt3">
                                            <p>{indexpay.qty}</p>
                                        </div>
                                        <div className="sol_rt2">
                                            <p>${indexpay.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="cart-buynow">
                        <button>Pay</button>
                    </div>
                </form>

            </div>
        </div>
    )
}
