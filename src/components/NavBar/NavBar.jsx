/* eslint-disable max-len */
import React, { useState } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
// import PropTypes from 'prop-types'

import navBar from './NavBar.module.css'
import Hamburger from '../Hamburger'

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const hideMenu = () => {
    setShowMenu((old) => {
      document.body.style.overflow = !old ? 'hidden' : 'scroll'
      return !old
    })
  }

  return (
    <div className={navBar.styles} id="navBar">
      <button className={navBar.nav} type="button" onClick={hideMenu}>
        <Hamburger isActive={showMenu} />
      </button>
      <a className={navBar.nav} href="/">
        <img height={40} src="https://www.sleep-token.com/wp-content/uploads/sites/15/2023/01/sleep-token-logo.png" alt="sleep-token" />
      </a>
      <a className={navBar.nav} href="https://www.sleep-token.com/basket/" style={{ width: '36px', justifyContent: 'flex-end' }}>
        <img src="/shop.svg" alt="shop" height={26} />
      </a>
      <div className={navBar.sideMenu} style={{ display: `${showMenu ? 'flex' : 'none'}` }}>
        <a href="https://www.sleep-token.com/product-category/tmbte/">TMBTE PRE-ORDERS</a>
        <a href="https://www.sleep-token.com/shop/">UK / EU STORE</a>
        <a href="https://spinefarm.merchnow.com/collections/sleep-token">US STORE</a>
        <a href="https://24hundred.net/collections/sleep-token">AU STORE</a>
        <a href="https://sleeptoken.tmstor.es/">LABEL STORE</a>
        <a href="https://imperi.cn/sleep-token-imp">IMPERICON</a>
        <a href="https://www.sleep-token.com/tmbte-singles/">SINGLES / VIDEOS</a>
        <a href="https://www.sleep-token.com/live/">TOUR DATES</a>
        <a href="https://www.sleep-token.com/follow/">FOLLOW</a>
      </div>
    </div>
  )
}

NavBar.defaultProps = {

}

NavBar.propTypes = {

}

export default NavBar
