import { useContext } from "react";
import { AppContext } from "../../../AppContext";
import "./web1.css";

export default function Web1() {
    const { box, activeIndex } = useContext(AppContext);

    return (
        <div className="homep1-cus">
            <div
                className="web1-home1"

            >
                {box && box.map((itemb, index) => (
                    <div
                    className="itemb_blog "
                    style={{ transform: `translate(-${activeIndex * 100}%)` }}
                     key={index}>
                        <h2 className="animate__animated animate__bounce" style={{color:"#c84648"}}>{itemb.name}</h2>
                        <p className="animate__animated animate__jello" style={{fontSize:"25px"}}>{itemb.introduce}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
