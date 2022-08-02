import React from 'react'
import './Header.sass'

export default function Header() {
  return (
	<div className="container">
		<header className='header'>
			<img src="images/logo.svg" alt="Logo" className="logo" />
			<nav className="menu"> </nav>
			<img src="images/menu.svg" alt="Menu" className="menu" />
		</header>
	</div>
  )
}
