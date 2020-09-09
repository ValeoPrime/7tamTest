import React, {useContext} from 'react'
import './banner.sass'
import banner from '../../../img/banner.png'
import Context from '../../context'

export default function Banner() {
    const {language} = useContext(Context)

    return (
        <div className='banner-sideBar'>
            <h2 className='banner-sideBar__title '>{language[0].news}</h2>
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
