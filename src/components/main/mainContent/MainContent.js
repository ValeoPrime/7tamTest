import React, { useContext } from 'react'
import "./mainContent.sass"
import MainContentListItem from './mainContentItem/MainContentListItem'
import Context from '../../context'


export default function MainContent() {
    const {models, language} = useContext(Context)
    return (
        
        <section className='mainContent'>
            <h2 className='mainContent__title'>{language[0].onSale}</h2>
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
