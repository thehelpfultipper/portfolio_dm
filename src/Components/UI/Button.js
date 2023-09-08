
import s from './Button.module.css';

const Button = (props) => {
    return (
        <button type={props.type} className={`${props?.className} ${s.btn}`} onClick={props?.btnClickHandler}>{props.children}</button>
    )
}


export default Button;