import React, {useContext} from 'react'
import './mainContentListItem.sass'
import Context from '../../../context'

export default function MainContentListItem({item}) {
    const bgc = item.id % 2 === 0 ? '#17182e' : '#232439'

    const {changeBasketCount} = useContext(Context)

    return (
        
        <li className="mainContent__list_item" style= {{backgroundColor: bgc}} 
        onClick={()=>{
            changeBasketCount(item.id)
        }}
        >
            <div className="wraper__squaresInCorner">
                <div className="release">{item.release}</div>
                <div className="manufacturer">{item.manufacturer}</div>
                <div className="model">{item.model}</div>
                <div className="hash">{item.hash}</div>
                <div className="algoritm">{item.algorithm}</div>
                <div className="efficiency">{item.efficiency}</div>
                <div className="profit"><span>{item.profit}</span> / day</div>
                <div className="price">${item.minPrice} - ${item.maxPrice}</div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </li>
    )
}
