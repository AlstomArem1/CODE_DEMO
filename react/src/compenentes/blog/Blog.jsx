import "./Blog.css";
import houseblog from "./ip14.jpg"
import spam1 from "./ip14.jpg";
import samsung1 from "./ip14.jpg";
import sl1 from "./ip14.jpg";
import esl1 from "./kp3.webp";
import esl2 from "./kp7.webp";
import esl3 from "./lp6.webp";
import esl4 from "./kp8.webp";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { ImPinterest2 } from "react-icons/im";
import { TfiYoutube } from "react-icons/tfi";
import { CgSearchLoading } from "react-icons/cg";
import { BiReset } from "react-icons/bi";


import { useContext } from "react";
import { AppContext } from "../../AppContext";
export default function Blog() {
    const {visitblognew, BLog1, Laptop2, Laptop3, pagesblognews, setCurrentPage, currentPage, prevPageBlog,
        nextPageBlog, setQuery, query, Blognews, handle_BlogSearch, handle_BlogReset,


    } = useContext(AppContext);



    return (
        <div className="blog12">
            <div className="blog12-container">
                <div className="blog12-zeem1">
                    <div className="zeem1-start">
                        <h1 className="animate__animated animate__bounceInDown">Blog</h1>
                        <p className="animate__animated animate__heartBeat">A lifestyle blog</p>
                    </div>
                    {BLog1 && BLog1.map((itemblog1, index) => (
                        <div className="zeem1-end" key={index}>
                            <div className="zeem1-imgl">
                                <img src={"http://localhost:8000/images/" + itemblog1.image} alt="" />
                            </div>
                            <div className="zeem1-we animate__animated animate__flipInY">
                                <small style={{ color: "#f0932b" }}>Welcome to my world</small>
                                <h3>{itemblog1.name}</h3>
                                <p>{itemblog1.introduce}...</p>
                                <a href="#link" className="we-btn">Continue reading</a>
                                <a href={itemblog1.news} className="we-btn">Link</a>

                            </div>
                        </div>
                    ))}
                </div>
                <div className="blog12-zeem2" >
                    <div className="zeem2-start" id="link">
                        <h2 >News Link</h2>
                    </div>
                    <form className="input-seach"
                    onSubmit={handle_BlogSearch}
                    >
                        <input
                            type="text"
                            placeholder="Search Name..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                            <button type="submit" ><CgSearchLoading/></button>
                            <button onClick={() => handle_BlogReset()}><BiReset/></button>

                    </form>
                    <div className="zeem2-end">
                        {visitblognew && visitblognew.map((itemblog) => (
                            <div className="endls-blog" key={itemblog.id}>
                                <div className="now-blog-name">
                                    <div className="end-imgs">
                                        <img src={"http://localhost:8000/images/" + itemblog.image} alt="" />

                                    </div>
                                    <a href={itemblog.news} type="submit" className="end-tra"
                                    >Link</a>
                                </div>
                                <p className="blog-news-name">{itemblog.name}...</p>
                            </div>
                        ))}
                    </div>
                    <div className="indexblognewpages">
                        <button className="prev" onClick={prevPageBlog}>&laquo;</button>
                        <p >
                            {pagesblognews && pagesblognews.map((itempage) => (
                                <button
                                    key={itempage}
                                    onClick={() => setCurrentPage(itempage)}
                                    className={`${currentPage === itempage ? "activeblognews" : ""}`}
                                >{`${itempage}`}</button>
                            ))}
                        </p>
                        <button className="next" onClick={nextPageBlog}>&raquo;</button>
                    </div>

                </div>
                <div className="blog12-zeem3">
                    {
                        Laptop3 && Laptop3.map((itemltop1bit) => (
                            <div className="zeem3-start" key={itemltop1bit.id}>
                                <div className="z3-st1">
                                    <small>BEAUTY</small>
                                    <h3>{itemltop1bit.name}</h3>
                                    <small>August 1, 2018 . Florian Geraro</small>
                                </div>
                                <div className="z3-imgls">
                                    <img src={"http://localhost:8000/images/" + itemltop1bit.image} alt="" />
                                </div>
                                <div className="z3-newspaper">
                                    <p>{itemltop1bit.introduce}</p>
                                </div>
                            </div>
                        ))
                    }
                    <div className="zeem3-end">
                        <div className="z3-po1">
                            <h4>Recent Posts</h4>
                        </div>
                        <div className="z3-po2">
                            {
                                Laptop2 && Laptop2.map((itemLtop2, key) => (
                                    <div className="z3-be1" key={key}>
                                        <div className="be1-imgs">
                                            <img src={"http://localhost:8000/images/" + itemLtop2.image} alt="" />
                                        </div>
                                        <div className="be1-blog">

                                            <small>BEAUTY</small>

                                            <p>
                                                {itemLtop2.name}
                                                <br />
                                                <small>August 1, 2018</small>
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }



                        </div>
                        <div className="z3-po3">
                            <h4>Subscribe and follow</h4>
                            <div className="z3-bricon">
                                <span><FaFacebookF /></span>
                                <span><AiOutlineInstagram /></span>
                                <span><AiOutlineTwitter /></span>
                                <span><ImPinterest2 /></span>
                                <span><TfiYoutube /></span>
                            </div>
                            <div className="z3-po3">
                                <h4>Must-read articles</h4>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
