

import s from './TextBox.module.css';

const TextBox = (props) => {
    return (
        <div
            className={`${s.TextBox} ${props?.className}`}>
            {props.children}</div>
    );
};

export default TextBox;