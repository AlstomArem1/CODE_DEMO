import { useContext } from "react"
import { AppContext } from "../../../AppContext";
import "./Ingunll.css";
import tivi from "./tivenull1.jpg";
import ip14 from "./ip14.jpg";
import myin from "./mayvitinh14.jpg";
export default function Ingunll() {
    const { box, activeIndex } = useContext(AppContext);
    return(
        <div className="ingunll">

            <div className="ingunll_hinhrong">
                {box && box.map((itemti, index) => (
                    <div

                    className="null_tiveimg"
                    style={{ transform: `translate(-${activeIndex * 100}%)` }}
                    key={index}>

                        <img src={"http://localhost:8000/images/"+itemti.image} alt=""/>
                    </div>
                ))}
            </div>
        </div>
    )
}
