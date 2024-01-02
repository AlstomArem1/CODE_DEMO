import { useContext } from "react"
import { AppContext } from "../../AppContext"
import "./Product.css";
import up14 from "./ip14.jpg";
import { AiTwotoneStar, AiOutlineHeart, AiFillApple, AiOutlineNodeExpand, AiOutlineStar } from "react-icons/ai";
import { TbMenuOrder } from "react-icons/tb";
import { HiMenuAlt2 } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import ControlledCarousel from "../boostrap/Boostrapimgs/Boosi";
import axios from "axios";
import { FaCheck } from "react-icons/fa";
import { BiReset } from "react-icons/bi";
import Pagination from "./pagination";




export default function Product() {
    const { product, addCart, fillterlist4, setCount, handle_Apple, apple, giaodich, handle_toptop, toptop,
        productValue, handle_Search, setProductValue, handle_Reset, setSetlectvalue, selectvalue, stringfiler,
        sortProductsByPrice, uservitegination,
    } = useContext(AppContext);
    var { Locallsum } = 0;




    return (
        <div className="shop">
            <div className="newshop-hinhrong">
                <div className="lag-newshop-chitiet1">
                    <div className="menu-may">
                        <div className="luachon">
                            <button><HiMenuAlt2 /></button>
                            <h3>Danh mục</h3>
                            <button><HiMenuAlt3 /></button>
                        </div>
                        <div className="luli">
                            <a className="ali" href="#">Điện thoại</a>
                            <div className="li-col">
                                <span><a className="al2" href="#">Iphone</a></span>
                                <span><a className="al2" href="#">Samsung</a></span>
                                <span><a className="al2" href="#">Xiaomi</a></span>
                                <span><a className="al2" href="#">OPPO</a></span>
                                <span><a className="al2" href="#">Nokia</a></span>
                                <span><a className="al2" href="#">realme</a></span>
                                <span><a className="al2" href="#">OnePlus</a></span>
                                <span><a className="al2" href="#">Huawei</a></span>
                            </div>
                        </div>
                        <div className="luli">
                            <a className="ali" href="#">Laptop</a>
                            <div className="li-col">
                                <span><a className="al2" href="#">HP</a></span>
                                <span><a className="al2" href="#">Mac</a></span>
                                <span><a className="al2" href="#">Dell</a></span>
                                <span><a className="al2" href="#">ASUS</a></span>
                                <span><a className="al2" href="#">Microsogt Surface</a></span>
                                <span><a className="al2" href="#">LG</a></span>
                                <span><a className="al2" href="#">Gaming</a></span>
                                <span><a className="al2" href="#">Sinh viên</a></span>
                            </div>
                        </div>
                        <div className="luli">
                            <a className="ali" href="#">Âm thanh</a>
                            <div className="li-col">
                                <span><a className="al2" href="#">Bluetooth</a></span>
                                <span><a className="al2" href="#">Apple</a></span>
                                <span><a className="al2" href="#">Samsung</a></span>
                                <span><a className="al2" href="#">Sony</a></span>
                                <span><a className="al2" href="#">Havit</a></span>
                                <span><a className="al2" href="#">Iphone</a></span>
                                <span><a className="al2" href="#">Thể thao</a></span>
                                <span><a className="al2" href="#">Soul</a></span>
                            </div>
                        </div>
                        <div className="luli">
                            <a className="ali" href="#">Đồng hồ máy</a>
                            <div className="li-col">
                                <span><a className="al2" href="#">Apple Watch Ultra</a></span>
                                <span><a className="al2" href="#">Apple Watch SE 2023</a></span>
                                <span><a className="al2" href="#">Apple Watch Series 8</a></span>
                                <span><a className="al2" href="#">Garmin Forerunner 956</a></span>
                                <span><a className="al2" href="#">Garmin Forerunner 265</a></span>
                                <span><a className="al2" href="#">Apple Watch SE</a></span>
                                <span><a className="al2" href="#">Amazfit GTR Mini</a></span>
                                <span><a className="al2" href="#">Huawei band 3</a></span>
                            </div>
                        </div>
                        <div className="luli">
                            <a className="ali" href="#">PC, Màn hình</a>
                            <div className="li-col">
                                <span><a className="al2" href="#">ASUS</a></span>
                                <span><a className="al2" href="#">LG</a></span>
                                <span><a className="al2" href="#">Samsung</a></span>
                                <span><a className="al2" href="#">DELL</a></span>
                                <span><a className="al2" href="#">HP</a></span>
                                <span><a className="al2" href="#">Apple</a></span>
                                <span><a className="al2" href="#">HKC</a></span>
                                <span><a className="al2" href="#">MSI</a></span>
                            </div>
                        </div>
                        <div className="luli">
                            <a className="ali" href="#">Tivi</a>
                            <div className="li-col">
                                <span><a className="al2" href="#">Samsung</a></span>
                                <span><a className="al2" href="#">LG</a></span>
                                <span><a className="al2" href="#">Xiaomi</a></span>
                                <span><a className="al2" href="#">Coocaa</a></span>
                                <span><a className="al2" href="#">Casper</a></span>
                                <span><a className="al2" href="#">Sony</a></span>
                                <span><a className="al2" href="#">Toshiba</a></span>
                                <span><a className="al2" href="#">Full HD</a></span>
                            </div>
                        </div>
                        <div className="luli">
                            <a className="ali" href="#">Tin công nghệ</a>
                            <div className="li-col">
                                <span><a className="al2" href="#">Tin công nghệ</a></span>
                                <span><a className="al2" href="#">Khám phá</a></span>
                                <span><a className="al2" href="#">S-Game</a></span>
                                <span><a className="al2" href="#">Tư vấn</a></span>
                                <span><a className="al2" href="#">Trên tay</a></span>
                                <span><a className="al2" href="#">Thị Trường</a></span>
                                <span><a className="al2" href="#">Thủ thuật</a></span>
                                <span><a className="al2" href="#">Kĩ thuật</a></span>
                            </div>
                        </div>
                    </div>
                    <div className="imgmay-ht">
                        <ControlledCarousel />
                    </div>
                </div>
                <div className="lag-newshop-chitiet2">
                    <div className="chitiet2_start">
                        <h1>New Products</h1>
                    </div>
                    <div className="chitiet2_end">
                        <button className={apple === 1 ? 'apple1 activeleft' : 'apple1'} onClick={() => handle_Apple(1)}><AiFillApple /></button>
                        <button className={apple === 2 ? 'apple1 activeleft' : 'apple1'} onClick={() => handle_Apple(2)}><AiOutlineNodeExpand /></button>
                    </div>
                </div>
                <div className="box-newshop">
                    <div className="shop-link-list">
                        <div className="linttop">
                            <h4 style={{ color: "#fff" }}>Search</h4>
                            <button className="linttop-btntop"
                                onClick={handle_toptop}
                            >
                                <TbMenuOrder />
                            </button>
                        </div>

                        <div className={`shortop ${toptop ? 'activetoptop' : ''}`}>
                            <form action="" className="form-search-inout"
                                onSubmit={handle_Search}
                            >
                                <input type="text"
                                    placeholder="Search Name ... "
                                    value={productValue}
                                    onChange={(e) => setProductValue(e.target.value)}
                                />
                                <button className="searchiot-btn1" ><FaCheck /></button>
                                <button className="searchiot-btn2" onClick={() => handle_Reset()}><BiReset /></button>

                            </form>
                            <div className="Sort-selectvalue" action="#">
                                <select name="sort" id="sort"
                                    className="sort-selection--style"
                                    value={selectvalue}
                                    onChange={e => setSetlectvalue(e.target.value)}
                                >
                                    <option>--SelectFiler--</option>
                                    <option>hcm</option>
                                    <option>dn</option>
                                    <option>hn</option>
                                </select>
                                <button className="searchiot-fliet" onClick={stringfiler}><FaCheck /></button>
                            </div>
                            <div className="productSort_header">
                                <h5>Filter By Price</h5>
                                <div className="product-cards_price-filter">
                                    <span>Price : &nbsp;</span>
                                    <select className="form-select-sortby" name="" id=""
                                        onChange={(e) => sortProductsByPrice(e)}
                                    >
                                        <option value="LowToHigh">Low To High</option>
                                        <option value="HighToLow">High To Low</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="shop-product " >
                        <div className={apple === 1 ? 'product-kinght showleft activeleft' : 'product-kinght showleft'}>
                            {uservitegination && uservitegination.map((itemp, index) => (

                                <div className="product-rol1" key={index} data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom" adta-aos-duration="2000">
                                    <div className="product-imgles1">
                                        {

                                        }
                                        <img src={"http://localhost:8000/images/" + itemp.image} alt="" />
                                    </div>
                                    <div className="itemp-nill">
                                        <h1 style={{ fontSize: "15px", fontWeight: "600" }}>{itemp.name}</h1>
                                        <small>{itemp.placeofbirth}</small>
                                        <p>

                                            Giá lên đời:<span style={{ color: "#7ab317" }}> ${itemp.price}</span>
                                        </p>
                                        <div className="item-icon">
                                            <i><span><AiTwotoneStar /></span></i>
                                            <i><span><AiTwotoneStar /></span></i>
                                            <i><span><AiTwotoneStar /></span></i>
                                            <i><span><AiTwotoneStar /></span></i>
                                            <i><span><AiTwotoneStar /></span></i>
                                        </div>
                                        <div className="btnbox-buy">
                                            <button className="btnbox"
                                                onClick={() => addCart(itemp.id)}
                                            >Add to Cart</button>

                                        </div>
                                        <div className="favatice">
                                            <p>Yêu thích </p>
                                            <Link to=""><span><AiOutlineHeart /></span></Link>
                                        </div>
                                        <div>{Locallsum}</div>
                                    </div>

                                </div>

                            ))}
                        </div>
                        <div className={apple === 2 ? 'product-kinght showleft activeleft' : 'product-kinght showleft'}>
                            {product && product.map((itemp, index) => (

                                <div className="product-rol2" key={index}>
                                    <div className="product-imgles2">
                                        <img src={"http://localhost:8000/images/" + itemp.image} alt="" />
                                        <div className="product-btnp2">
                                            <button onClick={() => addCart(itemp.id)}>Add to Cart</button>
                                        </div>
                                    </div>

                                    <div className="itemp-nill2">
                                        <h2 style={{ fontSize: "15px", fontWeight: "600" }}>{itemp.name}</h2>


                                        <small>{itemp.placeofbirth}</small>
                                        <p>${itemp.price} USD</p>

                                        <ul>
                                            {itemp.description}
                                        </ul>

                                    </div>
                                </div>

                            ))}
                        </div>
                        <Pagination />

                    </div>
                </div>

            </div>
        </div>
    )
}
