import { useState } from 'react';
import s from './DotIndicator.module.css';

const DotIndicator = ({ cardIndex, projects, dotIndex }) => {
    const dots = Array.from({ length: 3 }, (_, i) => {
        return <span
            key={i}
            className={`
                ${s.dot}
                ${i === dotIndex ? s.active : ''}
            `}></span>
    });

    return (
        <div className={s.DotIndicator}>
            {
                dots
            }
        </div>
    );
};


export default DotIndicator;