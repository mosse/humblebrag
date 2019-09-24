import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>Mark Macdonald</strong></h1>
                    <h1>Product | Code | Cooking | Cycling </h1><h1 style={{fontSize: '1.0em'}}><i>Not necessarily in that order...</i></h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
