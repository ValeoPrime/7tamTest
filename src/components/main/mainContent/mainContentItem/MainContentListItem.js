import React, { useContext } from 'react'
import './mainContentListItem.sass'
import Context from '../../../context/context'


export default function MainContentListItem(props) {
    const bgc = (props.dataId + 1) % 2 === 0 ? '#17182e' : '#232439'

    const { changeBasketCount } = useContext(Context)
    return (

        <li className="mainContent__list_item" style={{ backgroundColor: bgc }}
            onClick={() => {
                changeBasketCount(props.item.id)
            }}
        >
            <div className="wraper__squaresInCorner">
                <div className="release mob-hidden">{props.item.release}</div>
                <div className="manufacturer mob-hidden">{props.item.manufacturer}</div>
                <div className="model mob-hidden">{props.item.model}</div>
                <div className="fullName  mob-show">{props.item.fullName}</div>
                <div className="hash ">{props.item.hash}</div>
                <div className="algoritm mob-hidden">{props.item.algorithm}</div>
                <div className="efficiency mob-hidden">{props.item.efficiency}</div>
                <div className="profit mob-hidden"><span>{props.item.profit}</span> / day</div>
                <img className="list_item-img mob-show" src={props.item.url} alt="ant" />
                <div className="price">${props.item.minPrice} - <div className='dollar'>$</div>{props.item.maxPrice}</div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </li>
    )
}
