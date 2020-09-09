import React,{useContext} from 'react'
import logo from './../../img/Logo.svg'
import basket from './../../img/icons/basket.svg'
import './header.sass'
import Context from '../context'

export default function Header() {
    const context = useContext(Context)
    console.log(context.basketCount);
    return (
        <header className="header">
            <div className="logo__wrap">
                <img src={logo} alt="Logo" />
                <button className="change__lang">ENG</button>
            </div>
            <div className="basket__wrap">
                <img src={basket} alt="basket" />
                <span className="basket__count">{context.basketCount}</span>
            </div>
        </header>
    )
}