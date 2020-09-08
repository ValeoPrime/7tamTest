import React from 'react'
import facebook from './../../img/icons/facebook 2.svg'
import twitter from './../../img/icons/twitter 2.svg'
import youtube from './../../img/icons/youtube.svg'
import reddit from './../../img/icons/reddit.svg'
import './footer.sass'


export default function Footer() {
    return (
        <footer>
            <ul className="social__list">
                <li className="social_list_item">
                    <div className="wraper__squaresInCorner">
                        <a href="/"><img src={facebook} alt="facebook" /></a>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </li>
                <li className="social_list_item">
                    <div className="wraper__squaresInCorner">
                        <a href="/"><img src={twitter} alt="twitter" /></a>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </li>
                <li className="social_list_item">
                    <div className="wraper__squaresInCorner">
                        <a href="/"><img src={youtube} alt="youtube" /></a>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </li>
                <li className="social_list_item">
                    <div className="wraper__squaresInCorner">
                        <a href="/"><img src={reddit} alt="reddit" /></a>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </li>
            </ul>
        </footer>
    )
}