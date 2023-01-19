import React from 'react'
import css from './header.module.css'
import Logo from '../../assets/logo.png'
import { FiShoppingBag } from 'react-icons/fi'

const Header = () => {
  return (
    <div className={css.container}>
        <div className={css.logo}>
            <img src={Logo} alt="Logo" />
            <span>React Shop</span>
        </div>
        <div className={css.right}>
            <div className={css.menu}>
                <ul className={css.menu}>
                    <li>Collections</li>
                    <li>Brands</li>
                    <li>New</li>
                    <li>Sales</li>
                    <li>ENG</li>
                </ul>
            </div>
            <input type="text" className={css.search} placeholder="Search"/>
            <FiShoppingBag className={css.cart}/>
        </div>
    </div>
  )
}

export default Header;