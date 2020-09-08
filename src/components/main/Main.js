import React from 'react'
import './main.sass'
import Sorting from '../sorting/Sorting'
import MainContent from '../main/mainContent/MainContent'
import Banner from './banner/Banner'

export default function Main() {
    
    return (
        <div className="container">
            <Sorting />
            <MainContent/>
            <Banner/>
        </div>
    )
}