import React,{useState} from 'react'
import './sorting.sass'
import SortItem from './sortItem/SortItem'

export default function Sorting() {
    const [sortCategories] = useState([
        {
            id: 1,
            title: "By Manufacturer"
        },
        {
            id: 2,
            title: "Minimum price"
        },
        {
            id: 3,
            title: "Maximum price"
        },
    ])
    return (
        <div className='left-sideBar'>
            <h2 className='left-sideBar__title '>SORT BY</h2>
            <ul className="left-sideBar_list">
                
            {   sortCategories.map(item => {
                        return (
                            <SortItem title={item.title} key={item.id}/>
                        )
                    })
                }
            </ul>
        </div>
    )
}
