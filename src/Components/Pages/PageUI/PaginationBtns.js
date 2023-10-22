
import s from './PaginationBtns.module.css';

const PaginationBtns = ({num, onClick, page}) => {
    return <button 
            className={`${s.page_num} ${page === num ? s.active : ''}`} 
            value={num} 
            onClick={onClick}
            >{num}</button>;
}

export default PaginationBtns;