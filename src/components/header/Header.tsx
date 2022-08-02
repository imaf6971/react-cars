import React from 'react'
import Nav from '../nav/Nav'
import './Header.sass'

export default function Header() {
  return (
    <div className="container">
      <header className='header'>
        <img src="images/logo.svg" alt="Logo" className="logo" />
        <Nav />
        <img src="images/menu.svg" alt="Menu" className="menu" />
      </header>
    </div>
  )
}
