import { Link } from 'react-router-dom';

import React from 'react';

import home from '../../Assets/menu-home-min.svg';
import about from '../../Assets/menu-about-min.svg';
import projects from '../../Assets/menu-projects-min.svg';

import s from './OpenMenu.module.css';

const OpenMenu = () => {
    return (
        <div className={s.OpenMenu_wrapper}>
            <Link to='/'><div className={s.OpenMenu_item}>
                <img src={home} />
                <span>Home</span>
            </div></Link>
            <Link to='/about'><div className={s.OpenMenu_item}>
                <img src={about} />
                <span>About</span>
            </div></Link>
            <Link to='/projects'><div className={s.OpenMenu_item}>
                <img src={projects} />
                <span>Projects</span>
            </div></Link>
        </div>
    );
}

export default OpenMenu;