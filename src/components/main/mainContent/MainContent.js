import React, { useState } from 'react'
import "./mainContent.sass"
import MainContentListItem from './mainContentItem/MainContentListItem'

export default function MainContent() {
    const [models] = useState([
        {
            id: 1,
            release: 'Mar 2019',
            manufacturer: 'Bitmain',
            model: 'S9i',
            hash: '10.5-14.5 th/s',
            algorithm: 'SHA-256',
            efficiency: '8.00j/H/s',
            profit: '$122.88',
            price: '$137.00 - $217.00',
        },
        {
            id: 2,
            release: 'Apr 2020',
            manufacturer: 'YoshidaCorp',
            model: 'P11',
            hash: '14.5-19.5 th/s',
            algorithm: 'BDO-512',
            efficiency: '24.00j/H/s',
            profit: '$204.82',
            price: '$247.00 - $517.00',
        },
        {
            id: 3,
            release: 'Mar 2019',
            manufacturer: 'Bitmain',
            model: 'S9i',
            hash: '10.5-14.5 th/s',
            algorithm: 'SHA-256',
            efficiency: '8.00j/H/s',
            profit: '$122.88',
            price: '$137.00 - $217.00',
        },
        {
            id: 4,
            release: 'Apr 2020',
            manufacturer: 'YoshidaCorp',
            model: 'P11',
            hash: '14.5-19.5 th/s',
            algorithm: 'BDO-512',
            efficiency: '24.00j/H/s',
            profit: '$204.82',
            price: '$247.00 - $517.00',
        },
        {
            id: 5,
            release: 'Mar 2019',
            manufacturer: 'Bitmain',
            model: 'S9i',
            hash: '10.5-14.5 th/s',
            algorithm: 'SHA-256',
            efficiency: '8.00j/H/s',
            profit: '$122.88',
            price: '$137.00 - $217.00',
        },
    ])
    return (
        <section className='mainContent'>
            <h2 className='mainContent__title'>ON SALE</h2>
            <div className="mainContent__topLine">
                <div className="wraper__squaresInCorner">
                    <div className="release">Release</div>
                    <div className="manufacturer">Manufacturer</div>
                    <div className="model">Model</div>
                    <div className="hash">Hash</div>
                    <div className="algorithm">Algorithm</div>
                    <div className="efficiency">Efficiency</div>
                    <div className="profit">Profit</div>
                    <div className="price">Price</div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <ul className="mainContent__list">
                {
                    models.map(item => {
                        return (
                            <MainContentListItem item = {item} key={item.id}/>
                        )
                    })
                }

            </ul>
        </section>
    )
}
