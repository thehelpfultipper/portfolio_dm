
import OpenMenu from './OpenMenu';
import s from './Hamburger.module.css';

const Hamburger = () => {
    const openMenuHandler = (e) => {
        // Get list of all spans
        const bars = e.target.children;
        
        // Loop through the bars list
        [...bars].forEach( (bar, i) => {
            i === 0 && bar.classList.toggle(s['top-center']); 
            i === 2 && bar.classList.toggle(s['bottom-center']);
            i === 1 && bar.classList.toggle(s['turn-90']);
            
        });
        e.target.classList.toggle(s['turn-45']);
    }

    return (
        <div className={s.hbg_wrapper} onClick={openMenuHandler}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export default Hamburger;