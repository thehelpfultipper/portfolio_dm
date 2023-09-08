
import s from './Divider.module.css';

const Divider = (props) => {
    return (
        <div className={`${s.Divider} ${props?.className}`}></div>
    )
}

export default Divider;