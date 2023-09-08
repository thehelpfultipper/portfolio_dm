import { useState, Fragment } from 'react';

import OpenMenu from './OpenMenu';
import s from './Hamburger.module.css';

const Hamburger = () => {
    let [isOpen, setIsOpen] = useState(false);

    const openMenuHandler = (e) => {
        // Get list of all spans
        const bars = e.target.children;

        // Loop through the bars list
        [...bars].forEach((bar, i) => {
            i === 0 && bar.classList.toggle(s['top-center']);
            i === 2 && bar.classList.toggle(s['bottom-center']);
            i === 1 && bar.classList.toggle(s['turn-90']);

        });
        e.target.classList.toggle(s['turn-45']);

        setTimeout(() => {
            setIsOpen(!isOpen);
         }, 200);
        
    }

    return (
        <Fragment>
            <div className={s.hbg_wrapper} onClick={openMenuHandler}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {isOpen && <OpenMenu />}
        </Fragment>
    );
}

export default Hamburger;