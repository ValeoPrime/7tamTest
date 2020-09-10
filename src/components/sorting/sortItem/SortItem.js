import React, {useContext} from 'react'
import  './sortItem.sass'
import Context from '../../context/context'

export default function SortItem({title, id}) {
   const {sortItems} = useContext(Context)

    return (
        <li className="left-sideBar__listItem">
            <div className="wraper__squaresInCorner">
                <button onClick={() => {
                    sortItems(id)
                }}>{title}</button>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </li>
    )
}
