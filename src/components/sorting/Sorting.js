import React, { useContext } from 'react'
import './sorting.sass'
import SortItem from './sortItem/SortItem'
import Context from '../context/context'

export default function Sorting() {
    const { language } = useContext(Context)

    return (
        <div className='left-sideBar'>
            <h2 className='left-sideBar__title '>{language[0].sortBy}</h2>
            <ul className="left-sideBar_list">

                {language[0].sortVariants.map((item, i) => {
                    return (
                        <SortItem title={item} id={i} key={i} />
                    )
                })
                }
            </ul>
        </div>
    )
}
