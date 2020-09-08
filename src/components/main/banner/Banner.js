import React from 'react'
import './banner.sass'
import banner from '../../../img/banner.png'

export default function Banner() {
    return (
        <div className='banner-sideBar'>
            <h2 className='banner-sideBar__title '>NEWS</h2>
            <a href="/">
                <div className="wraper__squaresInCorner">
                    <img src={banner} alt="banner" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </a>
        </div>
    )
}
