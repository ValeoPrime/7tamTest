import React, { useContext } from 'react'
import logo from './../../img/Logo.svg'
import mobLogo from './../../img/mobilelogo.svg'
import basket from './../../img/icons/basket.svg'
import mobMenu from './../../img/icons/mobMenu.svg'
import './header.sass'
import Context from '../context/context'

export default function Header() {
    const context = useContext(Context)

    return (
        <header className="header">
            <div className="logo__wrap">
                <img src={logo} alt="Logo" />
                <button className="change__lang"
                    onClick={context.changeLanguage}
                >{context.language[0].langType}</button>
            </div>
            <button className="mobile__menu"><img src={mobMenu} alt="mobileLogo" /></button>
            <img className="mobile__logo" src={mobLogo} alt="MobileMenu" />
            <div className="basket__wrap">
                <img src={basket} alt="basket" />
                <span className="basket__count">{context.basketCount}</span>
            </div>
        </header>
    )
}