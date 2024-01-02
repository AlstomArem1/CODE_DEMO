import "./Order.css";
import { useState } from "react";
import shp from "./Shipper.png"
import FormFloatingTextareaExample from "../boostrap/form/Formtext";
import Address from "../boostrap/address/Address";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
export default function Order() { 
    const { Guitinnhan } = useContext(AppContext);
    
    return (
        <div className="order">
            <div className="oder-contaim">
                <div className="oder-container">
                    <div className="der-left">
                        <div className="imgl-left">
                            <img src={shp} />
                        </div>
                    </div>
                    <div className="der-right">
                        <div className="js-h4">
                            <h4>Kiểm tra thông tin đơn hàng & tình trạng vận chuyện</h4>
                        </div>
                        <hr></hr>
                        <div className="form-right">
                            <input type="text" placeholder="Số điện thoại (bắt buộc)"></input>
                            <input type="text" placeholder="Mã đơn hàng (bắt buộc)"></input>
                           <button className="ktra">Kiểm tra</button>
                        </div>
                        <span className="hoac-gr">-Hoặc-</span>
                        <div className="form-ktras">
                            <Link to="/SignIn"><button className="ktras">Đăng nhập để tra cứu thuận tiện hơn</button></Link>
                        </div>
                    </div>
                </div>
                <div className="form-fx-container">
                    <Address />
                    <FormFloatingTextareaExample />
                    <div  className="gui-chat">
                        <button className="btn-chat" onClick={Guitinnhan}>Gửi tin nhắn</button>
                    </div>
                  
                </div>
            </div>
        </div>
    )
}