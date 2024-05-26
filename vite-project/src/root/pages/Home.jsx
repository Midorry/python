import axios from "axios";
import { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";

const Home = () => {
    const option = {
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        animateOut: "slideOutUp",
        nav: false,
        dots: false,
        margin: 0,
        responsive: {
            1100: {
                items: 4,
            },
            724: {
                items: 1,
            },
            500: {
                items: 1,
            },
            370: {
                items: 1,
                innerWidth: "100%",
                outerWidth: "100%",
            },
        },
    };

    const [listProduct, setListProduct] = useState([]);

    async function getAllProduct() {
        try {
            const response = await axios.get(
                "http://127.0.0.1:5000/product/list"
            );
            setListProduct(response.data);
            console.log(response.data);
            console.log(response);
            console.log(listProduct);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getAllProduct();
    }, []);

    return (
        <div>
            <section className="categories">
                <div className="container">
                    <div className="row">
                        <OwlCarousel
                            className="categories__slider owl-carousel owl-theme"
                            {...option}
                        >
                            {listProduct.map((product, index) => (
                                <div
                                    key={index}
                                    className="col-lg-3 w-full p-2"
                                >
                                    <div className="categories__item">
                                        <img
                                            src={`${product.image}`}
                                            style={{
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "cover",
                                                backgroundPosition:
                                                    " top center",
                                                width: "100%",
                                                height: "100%",
                                            }}
                                        ></img>
                                        <h5>
                                            <a href="#">{product.name}</a>
                                        </h5>
                                    </div>
                                </div>
                            ))}
                        </OwlCarousel>
                    </div>
                </div>
            </section>

            <section className="featured spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Featured Product</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row featured__filter">
                        {listProduct.map((product, index) => (
                            <div
                                key={index}
                                className="col-lg-3 col-md-4 col-sm-6 mix"
                            >
                                <div className="featured__item">
                                    <div
                                        className="featured__item__pic set-bg"
                                        data-setbg={`${product.image}`}
                                    >
                                        <img
                                            src={`${product.image}`}
                                            className="hidden xl:block bg-no-repeat object-cover"
                                        ></img>
                                        <ul className="featured__item__pic__hover">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-heart"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-retweet"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-shopping-cart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="featured__item__text">
                                        <h6>
                                            <a href="#">{product.name}</a>
                                        </h6>
                                        <h5>{product.price}đ</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="banner__pic">
                                <img
                                    src="../../../public/assets/img/banner/banner-1.jpg"
                                    alt=""
                                ></img>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="banner__pic">
                                <img
                                    src="../../../public/assets/img/banner/banner-2.jpg"
                                    alt=""
                                ></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
