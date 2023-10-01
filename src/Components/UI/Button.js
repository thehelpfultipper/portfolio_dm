import { Link } from "react-router-dom";

import s from './Button.module.css';

const Button = (props) => {
    return (
        <button type={props.type} className={`${props?.className} ${s.btn}`} onClick={props?.btnClickHandler}>
            {props.linkTo ? <Link to={props.linkTo}>{props.children}</Link> : props.children}
        </button>
    )
}


export default Button;