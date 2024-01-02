
import seflimage from "./kinh1logo.png";
import "./Avatarfile.css";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
export default function Avatarfile() {
    const { image } = useContext(AppContext);
   return (
    <>
        <div className="click-image-avatar">
            {image ? <img src={URL.createObjectURL(image)} alt=""/> : <img src={seflimage} alt=""/>}
        </div>
    </>
   );
};
