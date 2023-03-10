import { React, useState } from 'react';
import css from './header.module.css';
import Logo from '../../assets/logo.png';
import { FiShoppingBag, FiMenu} from 'react-icons/fi';

const Header = () => {
    const [showMenu, setShowMenu] = useState(true)
    
    const toggleMenu = () => {
        setShowMenu((showMenu) => !showMenu)
    }

    return (
        <div className={css.container}>
            <div className={css.logo}>
                <img src={Logo} alt="Logo" />
                <span>React Beauty</span>
            </div>
            <div className={css.right}>
                <div className={css.burger} onClick={toggleMenu}>
                    <FiMenu />
                </div>
                <div className={css.menu} style={{display: showMenu? 'inherit': 'none'}}>
                    <ul className={css.menu}>
                        <li className='cat1'>Collections</li>
                        <li className='cat2'>Brands</li>
                        <li className='cat3'>New</li>
                        <li className='cat4'>Sales</li>
                        <li className='cat5'>ENG</li>
                    </ul>
                </div>
                <input type="text" className={css.search} placeholder="Search"/>
                <FiShoppingBag className={css.cart}/>
            </div>
        </div>
    );
}

export default Header;