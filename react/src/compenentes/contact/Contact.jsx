import "./Contact.css";
import { BiSolidMap } from "react-icons/bi";
import { MdOutgoingMail } from "react-icons/md";
import { BsPhoneFlip } from "react-icons/bs";
import { GoogleMap, useLoadScript, MarkerF, InfoWindowF } from "@react-google-maps/api";
import { useState } from "react";
import axios from "axios";

export default function Contact() {


    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
    });
    const marker = [
        {
            id: 1,
            name: "37/26 Nguyễn Ngọc Lộc, Phường 14, Quận 10, Thành phố Hồ Chí Minh 70000, Viêt Nam",
            postion: { lat: 10.767487, lng: 106.6619275 },
        }
    ]

    const [activeMaker, setActiveMaker] = useState(null);

    const handleActiceMaker = (marker) => {
        if(marker === activeMaker){
            return;
        }
        setActiveMaker(marker);
    }


    const [kinght , setkinght] = useState({
        yourname:'',
        email:'',
        sub:'',
        message:'',
    })
    const [errorlit, setErrorlit] = useState([]);
    const hanhlecontact = (e) => {
        e.persist();
        setkinght({ ...kinght, [e.target.name]: e.target.value });
    }
    const SubmitContact = async(e) => {
        e.preventDefault();
        const data = {
            yourname: kinght.yourname,
            email: kinght.email,
            sub: kinght.sub,
            message: kinght.message,
        }
        axios.post(`/api/contact`, data).then(res => {
            if (res.data.status === 200) {
                swal("Contact Placed Successfully", res.data.message, "success");
                setErrorlit("");

            } else if (res.data.status === 422) {
                swal("All fields are mandatory", "", "error");
                setErrorlit(res.data.errors);
            }
        });

    }

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
                            {
                                isLoaded ? <GoogleMap
                                    center={{ lat: 10.767487, lng: 106.6619275 }}
                                    zoom={17.5}
                                    onClick={() => handleActiceMaker(null)}
                                    mapContainerStyle={{
                                        height: "100%",
                                        width: "100%",
                                        color: "#fff",
                                    }}
                                >
                                    {
                                        marker.map(({ id, name, postion }) => (
                                            <MarkerF
                                            key={id}
                                            position={postion}
                                            onClick={() => handleActiceMaker(id)}
                                            >
                                                {activeMaker === id ? (
                                                        <InfoWindowF onCloseClick={() => setActiveMaker(null)}>
                                                            <div>
                                                                <p style={{ color:"black" }}>{name}</p>
                                                            </div>
                                                        </InfoWindowF>
                                                    ) : null
                                                }
                                            </MarkerF>
                                        ))
                                    }
                                </GoogleMap> : null
                            }
                        </div>
                    </div>
                    <form className="contact-right" data-aos="fade-up" onSubmit={SubmitContact}
                        data-aos-anchor-placement="top-center" data-aos-duration="1000">
                        <div className="from-to1">
                            <div className="to1-left">
                                <label>Your Name:</label>
                                <br />
                                <input type="text" name="yourname" value={kinght.yourname} onChange={hanhlecontact}/><br/>
                                <small style={{ color: "red", fontSize: '12px' }}>{errorlit.yourname}</small>
                            </div>
                            <div className="to1-right">
                                <label>YourEmail:</label>
                                <br />
                                <input type="text" name="email" value={kinght.email} onChange={hanhlecontact}/><br/>
                                <small style={{ color: "red", fontSize: '12px' }}>{errorlit.email}</small>
                            </div>
                        </div>
                        <div className="from-to2">
                            <label>Subject</label>
                            <br />
                            <input type="text" name="sub" value={kinght.sub} onChange={hanhlecontact}></input><br/>
                            <small style={{ color: "red", fontSize: '12px' }}>{errorlit.sub}</small>
                        </div>
                        <div className="from-to3">
                            <label>Message:</label>
                            <br />
                            <textarea name="message" value={kinght.message} onChange={hanhlecontact}/><br/>
                            <small style={{ color: "red", fontSize: '12px' }}>{errorlit.message}</small>
                        </div>
                        <div className="from-btnto4">
                            <button type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
