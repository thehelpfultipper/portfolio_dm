import { useState, useRef, useEffect, Fragment } from 'react';

import OpenMenu from './OpenMenu';
import s from './Hamburger.module.css';

const Hamburger = () => {
    let [isOpen, setIsOpen] = useState(false);

    let menuRef = useRef(null);

    const menuTransform = (menu) => {
        // Get list of all spans
        const bars = menu.children;

        // Loop through the bars list
        [...bars].forEach((bar, i) => {
            i === 0 && bar.classList.toggle(s['top-center']);
            i === 2 && bar.classList.toggle(s['bottom-center']);
            i === 1 && bar.classList.toggle(s['turn-90']);

        });
        menu.classList.toggle(s['turn-45']);
    }

    const openMenuHandler = (e) => {
        menuTransform(e.target);

        setTimeout(() => {
            setIsOpen(!isOpen);
         }, 200);
        
    }

    useEffect( () => {
        // handle clicks outside of menu
        const handleOutsideClick = (e) => {
            if(isOpen && menuRef.current && (!menuRef.current.contains(e.target) || menuRef.current.contains(e.target) && e.target !== menuRef.current)) {
                setIsOpen(false);
                menuTransform(menuRef.current);
            }
        }

        if(isOpen) {
            document.querySelector('body').addEventListener('click', handleOutsideClick);
        }

        return( ()=>{
            document.querySelector('body').removeEventListener('click', handleOutsideClick);
        });
    }, [isOpen]);

    return (
        <Fragment>
            <div className={s.hbg_wrapper} onClick={openMenuHandler} ref={menuRef}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {isOpen && <OpenMenu />}
        </Fragment>
    );
}

export default Hamburger;