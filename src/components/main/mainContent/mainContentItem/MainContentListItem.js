import React from 'react'
import './mainContentListItem.sass'

export default function MainContentListItem({item}) {
    const bgc = item.id % 2 === 0 ? '17182e' : '#232439'
    console.log(bgc);
    return (
        <li className="mainContent__list_item" style= {{backgroundColor: bgc}}>
            <div className="wraper__squaresInCorner">
                <div className="release">{item.release}</div>
                <div className="manufacturer">{item.manufacturer}</div>
                <div className="model">{item.model}</div>
                <div className="hash">{item.hash}</div>
                <div className="algorithm">{item.algorithm}</div>
                <div className="efficiency">{item.efficiency}</div>
                <div className="profit"><span>{item.profit}</span> / day</div>
                <div className="price">{item.price}</div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </li>
    )
}
