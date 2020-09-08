import React from 'react'
import  './sortItem.sass'

export default function SortItem({title}) {
    return (
        <li className="left-sideBar__listItem">
            <div className="wraper__squaresInCorner">
                <button>{title}</button>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </li>
    )
}
