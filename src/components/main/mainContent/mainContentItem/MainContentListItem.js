import React, {useContext} from 'react'
import './mainContentListItem.sass'
import Context from '../../../context'

export default function MainContentListItem(props) {
    const bgc = (props.dataId + 1) % 2 === 0 ? '#17182e' : '#232439'
    
    const {changeBasketCount} = useContext(Context)

    return (
        
        <li className="mainContent__list_item" style= {{backgroundColor: bgc}} 
        onClick={()=>{
            changeBasketCount(props.item.id)
        }}
        >
            <div className="wraper__squaresInCorner">
                <div className="release">{props.item.release}</div>
                <div className="manufacturer">{props.item.manufacturer}</div>
                <div className="model">{props.item.model}</div>
                <div className="hash">{props.item.hash}</div>
                <div className="algoritm">{props.item.algorithm}</div>
                <div className="efficiency">{props.item.efficiency}</div>
                <div className="profit"><span>{props.item.profit}</span> / day</div>
                <div className="price">${props.item.minPrice} - ${props.item.maxPrice}</div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </li>
    )
}
