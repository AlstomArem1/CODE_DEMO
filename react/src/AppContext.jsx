
import { createContext, useEffect, useState, useLayouEffect, useRef } from "react";
import moment from "moment";
import axios from "axios";
import swal from 'sweetalert';
import Aos from "aos";
import { useNavigate } from "react-router-dom";

// import state from "sweetalert/typings/modules/state";
export const AppContext = createContext({});
export const AppProvider = ({ children }) => {
    const [show, setshow] = useState(true);
    const [apple, setApple] = useState(1);
    const [count, setCount] = useState(0);
    const [check, setCheck] = useState(0);
    const [box, setBox] = useState(null);
    const [product, setProduct] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [cart, setCart] = useState([]);
    const [navbar, setNavbar] = useState(false);
    const [toptop, setToptop] = useState(true);
    const [close, setClose] = useState(false);
    const navigate = useNavigate();

    const handle_toptop = () => {
        setToptop(!toptop);
    }

    const handle_close = () => {
        setClose(!close);
    }
    var Locallsum = 0;

    const getBox = async () => {
        const url = `http://localhost:8000/api/blog3bit`;
        axios.get(url).then(res => setBox(res.data)).catch((error) => {
            if (error.response.status === '404') {

            }
        })
    }
    //==============================================
    const [fillerdata, setFillerdata] = useState([]);
    const [productValue, setProductValue] = useState('');

    const getProduct = async () => {
        const url = `http://localhost:8000/api/shop`;
        return await axios
            .get(url).then((res) => {
                setProduct(res.data),
                    setFillerdata(res.data)
            })
            .catch((error) => {
                if (error.response.status == '404') {

                }
            })
    };

    const handle_Search = (e) => {
        e.preventDefault();
        // const getSearch = e.target.value;
        // setProductValue(getSearch);
        // if(getSearch.length > 0){
        //     const getSearch = e.target.value;
        //     const Searchdata = product.filter((itemp) => itemp.name.toLowerCase().includes(getSearch));
        //     setProduct(Searchdata);
        // }
        // else {
        //     setProduct(fillerdata);
        // }

        // console.warn(productValue);
        const Searchdata = product.filter((itemp) => itemp.name.toLowerCase().includes(productValue));
        setProduct(Searchdata);
    };

    // function stringfiler;
    const [selectvalue, setSetlectvalue] = useState('');

    const stringfiler = (e) => {
        e.preventDefault();
        const Searchdatafiler = product.filter((itemp) => itemp.placeofbirth.toLowerCase().includes(selectvalue));
        setProduct(Searchdatafiler);


    }

    const handle_Reset = () => {
        setProductValue("");
        getProduct();
    };


    //==============================================
    const [Blognews, setBlognews] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [blognewPerPage, setBlognewParPage] = useState(6);


    const indexbloglast = currentPage * blognewPerPage;
    const indexblogFirst = indexbloglast - blognewPerPage;
    const visitblognew = Blognews.slice(indexblogFirst, indexbloglast);

    const numOfTotalPages = Math.ceil(Blognews.length / blognewPerPage);
    const pagesblognews = [...Array(numOfTotalPages + 1).keys()].slice(1);

    const prevPageBlog = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1);
    };
    const nextPageBlog = () => {
        if (currentPage !== numOfTotalPages) setCurrentPage(currentPage + 1);
    };




    const getBlognews = async () => {
        return await axios
            .get(`http://localhost:8000/api/blogboxnews`)
            .then((response) => {
                setBlognews(response.data);
            })
            .catch((err) => console.log(err));
    }


    const [query, setQuery] = useState('');
    const handle_BlogSearch = (e) => {
        e.preventDefault();
        const Searchdatablog = Blognews.filter((itempblog) => itempblog.name.toLowerCase().includes(query));
        setBlognews(Searchdatablog);
    }
    const handle_BlogReset = () => {
        setQuery('');
        getBlognews();
    };




    //================================

    const [BLog1, setBLog1] = useState(null);
    const getBlog1 = async () => {
        const url = `http://localhost:8000/api/blog1bit`;
        await axios.get(url).then(res => setBLog1(res.data)).catch((error) => {
            if (error.response.status == '404') {

            }
        })
    }


    const [Laptop, setLaptop] = useState(null);
    const getLaptop = async () => {
        const url = `http://localhost:8000/api/bloglaptop`;
        await axios.get(url).then(res => setLaptop(res.data)).catch((error) => {
            if (error.response.status == '404') {

            }
        })
    }
    const [Laptop2, setLaptop2] = useState(null);
    const getLaptop2 = async () => {
        const url = `http://localhost:8000/api/bloglaptop2`;
        await axios.get(url).then(res => setLaptop2(res.data)).catch((error) => {
            if (error.response.status == '404') {

            }
        })
    }
    const [Laptop3, setLaptop3] = useState(null);
    const getLaptop3 = async () => {
        const url = `http://localhost:8000/api/bloglaptop1bit`;
        await axios.get(url).then(res => setLaptop3(res.data)).catch((error) => {
            if (error.response.status == '404') {

            }
        })
    }
    useEffect(() => {
        getBox();
        getProduct([...product.sort((a, b) => { return a.price - b.price })]);
        getBlognews();
        getBlog1();
        getLaptop();
        getLaptop2();
        getLaptop3();
        Aos.init();

    }, []);

    //---------------------------------------
    //function SortBy Product by Price -> Low or High
    const sortProductsByPrice = (e) => {
        e.stopPropagation();
        if (e.target.value === 'LowToHigh') {
            //Sorting Test by price  - Low To High
            setProduct([...product.sort((a, b) => { return a.price - b.price })]);
        }
        if (e.target.value === 'HighToLow') {
            //Sorting Test by price  - High To Low
            setProduct([...product.sort((a, b) => { return b.price - a.price })]);
        }
    }
    //---------------------------------------
    //function Pagination Product
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(4);

    const PaginationLast = page * limit;
    const PaginationFirst = PaginationLast - limit;
    const uservitegination = product.slice(PaginationFirst, PaginationLast);

    // function totalPage
    const totalPage = Math.ceil(product.length / limit);
    const pageTatalphae = [...Array(totalPage + 1).keys()].slice(1);

    // function Pre or Next with Products
    const prevPageProduct = () => {
        if (page !== 1) setPage(page - 1);
    };
    const nextPageProduct = () => {
        if (page !== totalPage) setPage(page + 1);
    };

    // const returnPaginationRange = () => {
    //     const totalPageNoInArray = 7 + siblings;
    //     if(totalPageNoInArray >= totalPage) {
    //         return _.range(1, totalPage + 1);
    //     }
    //     const leftSiblingsIndex = Math.max(page - siblings, 1);
    //     const rightSiblingsindex = Math.min(page + siblings, totalPage);

    //     const showleftDots = leftSiblingsIndex > 2;
    //     const showrightDots = rightSiblingsindex < totalPage - 2;

    //     if(!showleftDots && showrightDots){
    //         const leftItemsCount = 3 + 2 * siblings;
    //         const leftRange = _.range(1, leftItemsCount + 1);
    //         return [...leftRange, " ...", totalPage];

    //     } else if(showleftDots && !showrightDots){
    //         const rightItemsCount = 3 + 2 * siblings;
    //         const rightRange = _.range(totalPage - rightItemsCount + 1, totalPage + 1);
    //         return [1, "... ", ...rightRange];
    //     } else {
    //         const middleRange = _.range(leftSiblingsIndex, rightSiblingsindex + 1);
    //         return [1,"... ", ...middleRange, " ...", totalPage];
    //     }
    // }


    //---------------------------------------

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;

        } else if (newIndex >= box.length) {
            newIndex = box.length - 1;
        }
        setActiveIndex(newIndex);
    }



    const today = moment().format('MMMM, DD/MM/YYYY');
    const hour = moment().format('hh');
    const minet = moment().format('mm');
    const sec = moment().format('ss');
    const [time, setTime] = useState();
    const Times = () => {
        const sec = moment().format('ss');
        setTime(sec)
    }
    setInterval(Times, 1000);

    const addCart = (id) => {
        const kq = product.find((item) => item.id === id);
        const index = cart.findIndex((item) => item.id === id);
        if (index >= 0) {
            const newList = cart;
            // newList[index]["qty"]++;
            setCart(newList);
        }
        else {
            setCart([...cart, { ...kq, qty: 1 }]);
        }
        swal({
            title: "Complete!",
            text: "Do you want to add a shopping cart??",
            icon: "success",
            button: "Yes",
        });

    }
    //-------------------------------------


    //-------------------------------------
    // const [username, setUsername] = useState();
    // const [email, setEmail] = useState();
    // const [phone, setPhone] = useState();
    // const [address, setAddress] = useState();
    // const [country, setCountry] = useState();
    // const [city, setCity] = useState();
    // const [note, setNote] = useState();
    const [errors1, setErrors1] = useState([]);

    const [checkoutInput, setCheckoutInput] = useState({
        username: '',
        email: '',
        phone: '',
        address: '',
        country: '',
        city: '',
        note: '',
    });

    const handle_inputs = (e) => {
        e.persist();
        setCheckoutInput({ ...checkoutInput, [e.target.name]: e.target.value });
    }



    const handle_paymaent = (e) => {
        e.preventDefault();

        // try {
        //     await axios.post("http://localhost:8000/api/placeorder", { username, email, phone, address, country, city, note });
        //     setUsername("");
        //     setEmail("");
        //     setPhone("");
        //     setAddress("");
        //     setCountry("");
        //     setCity("");
        //     setNote("");

        //     navigate("/home")
        //     swal("Order Placed Successfully", res.data.message, "success");
        //     const kq = cart && cart.filter((item) => !item.id);
        //     setCart(kq);
        //     setErrors1("");

        //     // result = await result.json()
        //     // localStorage.setItem('user-info', JSON.stringify(result))

        // } catch (e) {
        //     if (e.response.status === 422) {
        //         setErrors1(e.response.data.errors);
        //         swal({
        //             title: "No",
        //             text: "Bạn chưa thêm bất cứ điều gì!",
        //             icon: "warning",
        //             button: "Next",
        //         });

        //     }
        // }
        const usets = localStorage.getItem('auth_name');
        const data = {
            username: usets,
            email: checkoutInput.email,
            phone: checkoutInput.phone,
            address: checkoutInput.address,
            country: checkoutInput.country,
            city: checkoutInput.city,
            note: checkoutInput.note,
        }

        axios.post(`http://localhost:8000/api/placeorder`, data).then(res => {
            if (res.data.status === 200) {
                swal("Order Placed Successfully", res.data.message, "success");
                setErrors1("");
                navigate("/home")
                const kq = cart && cart.filter((item) => !item.id);
                setCart(kq);

            } else if (res.data.status === 422) {
                swal("All fields are mandatory", "", "error");
                setErrors1(res.data.errors);
            }
        })

    }


    const sweetalert = (e) => {
        e.preventDefault();
        const kq = cart && cart.filter((item) => item.id);
        if (kq != 0) {
            setClose(!close);

        }
        else if (kq == 0) {
            swal({
                title: "No cart yet!",
                text: "Please buy cart!",
                icon: "warning",
                button: "Next",
            });
        }

    }
    const giaodich = () => {
        swal({
            title: "Giao dịch mua thành công!",
            text: "You clicked the button!",
            icon: "success",
            button: "Next",
        });
    }
    const handle_Apple = (e) => {
        setApple(e);
    }
    const minus = (id) => {
        const kq = cart && cart.map((item) => (
            item.id === id ? { ...item, qty: item.qty - (item.qty > 1 ? 1 : 0) } : item
        ));
        setCart(kq)
    }
    const sum = (id) => {
        const kq = cart && cart.map((item) => (
            item.id === id ? { ...item, qty: item.qty + (item.qty < 5 ? 1 : 0) } : item
        ));
        setCart(kq)
    }
    const InDelete = (id) => {
        const kq = cart && cart.filter((sty) => sty.id !== id);
        setCart(kq);
    }
    const AddDelete = () => {
        const kq = cart && cart.filter((item) => !item.id);
        setCart(kq);
    }
    const Background = () => {
        if (window.scrollY >= 150) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    window.addEventListener('scroll', Background);
    const handle_menu1 = () => {
        setshow(!show);
    }

    const Guitinnhan = () => {
        swal({
            title: "Complete!",
            text: "Đợi chờ để giao dịch địa chỉ của bạn!",
            icon: "success",
            button: "Next",
        });
    }
    //---------------------------------------------
    //function Avatar
    const inputRef = useRef(null);
    const [image, setImage] = useState('');

    const handleImageClick = () => {
        inputRef.current.click();

    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        console.log(file);
        setImage(e.target.files[0]);
    }
    return (
        <AppContext.Provider
            value={{
                box,
                activeIndex,
                setActiveIndex,
                updateIndex,
                today,
                hour,
                minet,
                time,
                product,
                addCart,
                cart,
                InDelete,
                AddDelete,
                minus,
                sum,
                sweetalert,
                Background,
                navbar,
                handle_menu1,
                show,
                inputRef,
                handle_Apple,
                apple,
                Locallsum,
                handleImageClick,
                setCount,
                Guitinnhan,
                giaodich,
                handle_toptop,
                toptop,
                handle_close,
                close,
                visitblognew,
                BLog1,
                Laptop,
                Laptop2,
                Laptop3,
                pagesblognews,
                setCurrentPage,
                currentPage,
                prevPageBlog,
                nextPageBlog,
                setQuery,
                query,
                Blognews,
                productValue,
                setProductValue,
                handle_Search,
                handle_Reset,
                stringfiler,
                selectvalue,
                setSetlectvalue,
                sortProductsByPrice,
                uservitegination,
                pageTatalphae,
                setPage,
                handle_BlogSearch,
                handle_BlogReset,
                prevPageProduct,
                nextPageProduct,
                page,
                handleImageChange,
                image,

                checkoutInput,
                handle_inputs,
                handle_paymaent,
                errors1,
                setLimit,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
