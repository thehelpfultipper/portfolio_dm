import { useLocation, Link } from 'react-router-dom';
import Hamburger from '../../Menu/Hamburger';
import Button from '../../UI/Button';

import logo from '../../../Assets/portfolio-logo-min.svg';

import s from './Nav.module.css';

const Nav = () => {
    const location = useLocation();
   
    return (
        <nav className={s.App_nav}>
            <Hamburger />
            <div className={s.App_logo__wrapper}>
                <Link to='/'><img src={logo} className={s['App-logo']} alt="logo" /></Link>
            </div>
            <div style={location.pathname === '/' ? {display: 'block'} : {display:'none'}}>
                <Button type='button' className={`${s.App_btn} ${s.App_header__btn}`}>UI/Graphic Design</Button>
            </div>
        </nav>
    );
}

export default Nav;