import "./Footer.css";
import { 
    FaMapMarkerAlt, 
    FaMailBulk, 
    FaPaperPlane,
    FaFacebookF,
    FaTwitter,
    FaTiktok
} from "react-icons/fa";
import { BsFillTelephoneForwardFill, BsInstagram } from "react-icons/bs"

import es3 from "./footerlist1.jpeg";
import es4 from "./footerlist2.jpg";
import logo1 from "./kinh1logo.png";
export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-rol">
                    <h1>Get in touch--</h1>
                    <p><span><FaMapMarkerAlt /></span>Themeforest, Envanto HQ 24 Figth st., Los Agneles USA</p>
                    <p><span><FaMailBulk /></span>info@example.com</p>
                    <div className="footer-phone">
                        <span className="icon-pe"><BsFillTelephoneForwardFill /></span>
                        <div className="support">
                            <p>Phone: +12 (3) 4567 899</p>
                            <p>Support: +12 (3) 4567 445</p>
                        </div>
                    </div>
                    <form className="footer-text">
                        <input className="text" tpye="text" placeholder="Enter email address" />
                        <button className="icon-flag"><span><FaPaperPlane /></span></button>
                    </form>
                </div>
                <div className="footer-rol">
                    <h1>Our Services--</h1>
                    <p>Wedding Planning</p>
                    <p>Parties/Concerts</p>
                    <p>Events for Kids</p>
                    <p>Llighting/Decor</p>
                    <p>Public Events</p>
                </div>
                <div className="footer-rol">
                    <h1>Recent Posts--</h1>
                    <div className="posts">
                        <img src={es3} alt="" />
                        <div className="post-blog">
                            <p>Best Kids' Birthday Party ldeas</p>
                            <small>October 1, 2018</small>
                        </div>
                    </div>
                    <hr className="hr1"></hr>
                    <div className="posts">
                        <img src={es4} alt="" />
                        <div className="post-blog">
                            <p>Unlock BMW number by iphone</p>
                            <small>October 1, 2018</small>
                        </div>
                    </div>
                </div>
                <div className="footer-rol">
                    <h1>Frequent Questions--</h1>
                    <p>How Can I Set An Event?</p>
                    <p>What Venues Do You Use?</p>
                    <p>Event Catalogue</p>
                    <p>Shipping & Delivery</p>
                </div>
            </div>
            <hr className="hr2"></hr>
            <div className="footer-bottom">
                <div className="logo-footer">
                    <img src={logo1}/>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesue corrupti quos dolores et quas molestias</p>
                </div>
                <div className="iconend-footer">
                    <div className="icon-fter">
                        <i><FaFacebookF/></i>
                        <i><FaTwitter/></i>
                        <i><BsInstagram/></i>
                        <i><FaTiktok/></i>
                    </div>
                    <p>Copyright © 2018 PresentUp. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}