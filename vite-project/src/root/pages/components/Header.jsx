import $ from "jquery";
import { NavLink, useLocation } from "react-router-dom";
const Header = () => {
    const location = useLocation();
    let classHero = "";
    if (location.pathname === "/home") {
        classHero = "hero";
    } else {
        // eslint-disable-next-line no-unused-vars
        classHero = "hero hero-normal";
    }
    const handleOnClick = () => {
        $(".hero__categories ul").slideToggle(400);
    };
    return (
        <div>
            <header className="header">
                <div className="header__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__left">
                                    <ul>
                                        <li>
                                            <i className="fa fa-envelope"></i>{" "}
                                            hello@colorlib.com
                                        </li>
                                        <li>
                                            Free Shipping for all Order of $99
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__right">
                                    <div className="header__top__right__social">
                                        <a href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-pinterest-p"></i>
                                        </a>
                                    </div>

                                    <div className="header__top__right__auth">
                                        <NavLink to="/">
                                            <i className="fa fa-user"></i>
                                            {window.localStorage.getItem(
                                                "isLogged"
                                            ) ? (
                                                <button
                                                    onClick={() => {
                                                        localStorage.removeItem(
                                                            "isLogged"
                                                        );
                                                    }}
                                                >
                                                    Logout
                                                </button>
                                            ) : (
                                                "Login"
                                            )}
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="header__logo">
                                <a href="./index.html">
                                    <img src="img/logo.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="header__menu">
                                <ul>
                                    <li>
                                        <NavLink to="./home">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="./shop">Shop</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">Pages</NavLink>
                                        <ul className="header__menu__dropdown">
                                            <li>
                                                <NavLink to="./shop-details">
                                                    Shop Details
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="./shopping-cart">
                                                    Shoping Cart
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="./checkout.html">
                                                    Check Out
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="./blog-details.html">
                                                    Blog Details
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <NavLink to="./blog.html">Blog</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="./contact.html">
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__cart">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-heart"></i>{" "}
                                            <span>1</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-shopping-bag"></i>{" "}
                                            <span>3</span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="header__cart__price">
                                    item: <span>$150.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="humberger__open">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </header>

            <section className={`${classHero}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="hero__categories">
                                <div
                                    className="hero__categories__all"
                                    onClick={handleOnClick}
                                >
                                    <i className="fa fa-bars"></i>
                                    <span>All departments</span>
                                </div>
                                <ul>
                                    <li>
                                        <a href="#">Departments</a>
                                    </li>
                                    <li>
                                        <a href="#">Departments</a>
                                    </li>
                                    <li>
                                        <a href="#">Departments</a>
                                    </li>
                                    <li>
                                        <a href="#">Departments</a>
                                    </li>
                                    <li>
                                        <a href="#">Departments</a>
                                    </li>
                                    <li>
                                        <a href="#">Departments</a>
                                    </li>
                                    <li>
                                        <a href="#">Departments</a>
                                    </li>
                                    <li>
                                        <a href="#">Departments</a>
                                    </li>
                                    <li>
                                        <a href="#">Departments</a>
                                    </li>
                                    <li>
                                        <a href="#">Departments</a>
                                    </li>
                                    <li>
                                        <a href="#">Departments</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="hero__search">
                                <div className="hero__search__form">
                                    <form action="#">
                                        <input
                                            type="text"
                                            placeholder="What do yo u need?"
                                        />
                                        <button
                                            type="submit"
                                            className="site-btn"
                                        >
                                            SEARCH
                                        </button>
                                    </form>
                                </div>
                                <div className="hero__search__phone">
                                    <div className="hero__search__phone__icon">
                                        <i className="fa fa-phone"></i>
                                    </div>
                                    <div className="hero__search__phone__text">
                                        <h5>+65 11.188.888</h5>
                                        <span>support 24/7 time</span>
                                    </div>
                                </div>
                            </div>
                            {location.pathname === "/home" ? (
                                <div
                                    className="hero__item "
                                    style={{
                                        backgroundImage: `url(../../../public/assets/img/hero/banner.jpg")`,
                                    }}
                                    data-setbg="../../../public/assets/img/hero/banner.jpg"
                                >
                                    <img
                                        className="set-bg"
                                        style={{
                                            width: "100%",
                                            height: "inherit",
                                            position: "absolute",
                                            content: "",
                                            right: 0,
                                        }}
                                        src="../../../public/assets/banner.avif"
                                    ></img>
                                    <div className="hero__text">
                                        <span>Mobile Phone</span>
                                        <h2
                                            style={{
                                                color: "white !important",
                                            }}
                                        >
                                            Vegetable <br />
                                            100% Organic
                                        </h2>
                                        <p>
                                            Free Pickup and Delivery Available
                                        </p>
                                        <a href="#" className="primary-btn">
                                            SHOP NOW
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <></>
                            )}
                            {/* <div
                                className="hero__item set-bg"
                                style={{
                                    backgroundImage: `url(../../../public/assets/img/hero/banner.jpg")`,
                                }}
                                data-setbg="../../../public/assets/img/hero/banner.jpg"
                            >
                                <img
                                    style={{
                                        position: "absolute",
                                        content: "",
                                        right: 0,
                                    }}
                                    src="../../../public/assets/img/hero/banner.jpg"
                                ></img>
                                <div className="hero__text">
                                    <span>FRUIT FRESH</span>
                                    <h2>
                                        Vegetable <br />
                                        100% Organic
                                    </h2>
                                    <p>Free Pickup and Delivery Available</p>
                                    <a href="#" className="primary-btn">
                                        SHOP NOW
                                    </a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;
