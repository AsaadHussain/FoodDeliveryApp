import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
    return (
        <div>
            <div>
                <div><Navbar /></div>
                <div>Body</div>
                <div><Footer/></div>
            </div>
        </div>
    )
}
