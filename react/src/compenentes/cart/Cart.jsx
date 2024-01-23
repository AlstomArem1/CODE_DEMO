import { useContext } from "react"
import { AppContext } from "../../AppContext"
import es2 from "./ip14.jpg";
import "./Cart.css";
import { MdDeleteSweep } from "react-icons/md"
import { Link } from "react-router-dom";
import { GiSelfLove } from "react-icons/gi";
import { RiShoppingCartFill } from "react-icons/ri"
import Pay from "../pay/Pay";
export default function Cart() {
    const { cart, minus, sum, InDelete, AddDelete, sweetalert ,close,handle_close   } = useContext(AppContext);
    var { Locallsum } = useContext(AppContext);




    return (
        <div className="cart">
            <div className={`Cart-Pay ${close ? "activecartpay" : ""}`}>
                <Pay />
            </div>
            <div className="cart-list">
                <h2><RiShoppingCartFill /><span>Add to Cart</span></h2>
            </div>
            <div className="cart-shop">

                {cart && cart.map((item, indexcart) => (
                    Locallsum += item.price * item.qty,
                    <div className="add-cart" key={indexcart}>
                        <div className="imgles2">
                            <img src={"http://localhost:8000/images/"+item.image} alt="" />
                        </div>
                        <div className="cart-end">
                            <div className="name-viet">
                                <small>Americana</small>
                                <Link className="love-cart" to="/signin"><GiSelfLove /></Link>
                            </div>
                            <h2 className="blog-name">{item.name}</h2>
                            <div className="button_GB">
                                <button className="btn_gb">64GB</button>
                                <button className="btn_gb">246GB</button>
                                {/* <button className="btn_gb">500GB</button> */}
                            </div>
                            <div className="button2">
                                <button className="btn2" onClick={() => minus(item.id)}>-</button>
                                <span className="item-qty">{item.qty}</span>
                                <button className="btn3" onClick={() => sum(item.id)}>+</button>
                            </div>
                            <h2 className="itemquy-cart" style={{ color:"green" }}>${item.price * item.qty}</h2>


                            <div className="cart-delete">
                                <span className="delete" onClick={() => InDelete(item.id)}><MdDeleteSweep /></span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-selling">
                <h2 className="giatien">Total price :<span style={{ color: "#7ab317" }}>${Locallsum}</span></h2>
            </div>
            <div className="bt-end">
                <button className="btn4" onClick={sweetalert}>Checkout</button>
                <button className="btn4" onClick={AddDelete}>Alldelete</button>
            </div>

        </div>
    )
}
