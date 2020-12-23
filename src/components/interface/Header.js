import React from 'react'
import logo from '../../images/logo.png'  // logo from the images folder in the src folder 
// required logo intthe center of header
const Header = () => {
	return (
		<header className='center'>
			<img src={logo} alt='' />   
		</header>
	)
}

export default Header