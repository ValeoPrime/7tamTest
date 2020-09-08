import React from 'react'
import logo from './../../img/Logo.svg'
import basket from './../../img/icons/basket.svg'
import './header.sass'


export default function Header() {
    return (
        <header className="header">
            <div className="logo__wrap">
                <img src={logo} alt="Logo" />
                <button className="change__lang">ENG</button>
            </div>
            <div className="basket__wrap">
                <img src={basket} alt="basket" />
                <span className="basket__count">0</span>
            </div>
        </header>
    )
}