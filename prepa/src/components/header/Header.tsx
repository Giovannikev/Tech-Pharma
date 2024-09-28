import React, { useState } from "react"
import './header.css'

const Header = () => {

    const [activeNav, setActiveNav] = useState("#home")

    return(
        <header className='header'>
            <nav className="nav container">
                <a href="index.html" className="nav__logo"><span className="logo font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-500">Tech Pharma</span>
                </a>

                <div className="nav content">
                    <input type="text" name="" placeholder="Rechercher ici" id="search__bar"/><i className="uil uil-search"></i>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-home-alt"></i> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav('#legacy')} className={activeNav === "#legacy" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-home-alt"></i> Legacy
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-user-alt"></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#shop" onClick={() => setActiveNav('#shop')} className={activeNav === "#shop" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-shop-alt"></i> Shop
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="nav__toggle">
                    <i className="uil uil-user"></i>
                </div>
            </nav>
        </header>
    )
}



export default Header;