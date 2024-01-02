import { useContext } from "react";
import "./Pay.css";
import { FaCartPlus } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { AppContext } from "../../AppContext";
export default function Pay() {
    const { handle_close, close, cart,sweetalert } = useContext(AppContext);
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
                <div className="mau-bitcart">
                    <div className="debit-cart">
                        <p>Vui long chon phuong thuc thanh toan</p>
                        <button type="submit">Credit/Debit Card</button>
                    </div>
                    <div className="rastaurant">
                        <input placeholder="So the ngan hang" />
                    </div>
                    <div className="pay-code">
                        <div className="hm-l1">
                            <label>Thoi han</label>
                            <br />
                            <input type="text" placeholder="MM/YY" />
                        </div>
                        <div className="hm-l2">
                            <label>CVV/CVC</label>
                            <br />
                            <input type="text" placeholder="3 hoac 4 chu so" />
                        </div>
                        <div className="hm-l3">
                            <label>Ho Ten chu the</label>
                            <br />
                            <input type="text" placeholder="Ho Ten" />
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
