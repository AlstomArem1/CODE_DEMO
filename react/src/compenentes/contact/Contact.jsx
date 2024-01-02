import "./Contact.css";
import { BiSolidMap } from "react-icons/bi";
import { MdOutgoingMail } from "react-icons/md";
import { BsPhoneFlip } from "react-icons/bs";
// import mapviti from "./mapvitri.PNG";
export default function Contact() {
    let user = JSON.parse(localStorage.getItem('user-info'));
    console.warn(user);
    return (
        <div className="contact">
            <div className="box-contact">
                <div className="contact-start">
                    <h1 className="animate__animated animate__rubberBand">CONTACT</h1>
                    <div className="nganglist">
                        <p className="nglit"></p><p className="ngang1"></p><p className="nglit"></p>
                    </div>
                    <p className="ngang2">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <div className="contact-end">
                    <div className="contact-left" data-aos="fade-down"
                        data-aos-anchor-placement="top-center" data-aos-duration="1000">
                        <div className="contact-icon">
                            <span><BiSolidMap /></span>
                            <div className="contact-tion">
                                <h3>Location:</h3>
                                <p>A108 Adam Street, New York, NY 535022</p>
                            </div>
                        </div>
                        <div className="contact-icon">
                            <span><MdOutgoingMail /></span>
                            <div className="contact-tion">
                                <h3>Email:</h3>
                                <p>info@example.com</p>
                            </div>
                        </div>
                        <div className="contact-icon">
                            <span><BsPhoneFlip /></span>
                            <div className="contact-tion">
                                <h3>Call:</h3>
                                <p>+1 5589 55488 55s</p>
                            </div>
                        </div>
                        <div className="contact-img">
                            {/* <img src={mapviti} alt="vi_tri" /> */}
                        </div>
                    </div>
                    <div className="contact-right" data-aos="fade-up"
                        data-aos-anchor-placement="top-center" data-aos-duration="1000">
                        <div className="from-to1">
                            <div className="to1-left">
                                <label>Your Name:</label>
                                <br />
                                <input type="text" name="name1" />

                            </div>
                            <div className="to1-right">
                                <label>YourEmail:</label>
                                <br />
                                <input type="text" name="name2" />
                            </div>
                        </div>
                        <div className="from-to2">
                            <label>Subject</label>
                            <br />
                            <input type="text" name="name3"></input>
                        </div>
                        <div className="from-to3">
                            <label>Message:</label>
                            <br />
                            <textarea name="name4" />
                        </div>
                        <div className="from-btnto4">
                            <button type="submit">Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
