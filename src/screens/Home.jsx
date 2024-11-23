import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Card from '../components/Card.jsx'
import Carousel from '../components/Carousel.jsx'

export default function Home() {
    return (
        <div>
            <div>
                <div><Navbar /></div>
                <div><Carousel/></div>
                <div className='m-3'><Card /></div>
                <div><Footer /></div>
            </div>
        </div>
    )
}
