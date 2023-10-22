import { Fragment, useState } from 'react';

import s from './PaginationInput.module.css';

const PaginationInput = ({page, setCurrentPage, totalPages, setIsInput}) => {
    let [newPage, setNewPage] = useState(page);
    let [input, setInput] = useState('');

    const inputClickedHandler = (event) => {
        setNewPage("");
        event.target.focus();
    }

    const inputEnterHandler = (event) => {
        if (event.keyCode == 13) { 
            event.target.blur();
            setIsInput(false);

            let p = parseInt(newPage);
            
            if (!isNaN(parseFloat(p)) && isFinite(p)) {
                if (p > totalPages) {
                    p = totalPages;
                } else if (p < 1) {
                    p = 1;
                }
            } else {
                p = page;
            }
            setCurrentPage(p);
        }
    }

    const inputChangeHandler = (e) => {
        let val = +e.target.value;
     
        if(val < 0 || isNaN(val)){
            setNewPage(1);
        } 
        else if(val > totalPages) {
            setNewPage(totalPages);
        } 
        else {
            setNewPage(val);
        }
    };

    const inputBlurHandler = e => {
        setIsInput(false);
        // let p = parseInt(newPage);
      
        // if (!isNaN(parseFloat(p)) && isFinite(p)) {
        //     if (p > totalPages) {
        //       p = totalPages;
        //     } else if (p < 1) {
        //       p = 1;
        //     }
        //   } else {
        //     p = page;
        //   }

        //   setCurrentPage(p);
    }

    const wrapperClickedHandler = () =>  setIsInput(false);

    return (
        <Fragment>
            <div className={s.overlay} onClick={wrapperClickedHandler}></div>
            <div className={s.input_wrapper}>
                <div>
                    <input 
                        type='number' 
                        min='1'
                        max={totalPages}
                        value={newPage}
                        onClick={inputClickedHandler} 
                        onKeyDown={inputEnterHandler}
                        onChange={inputChangeHandler}
                        onBlur={inputBlurHandler} /> 
                        <span>/</span> 
                        {totalPages}
                </div>
                <span className={s.helperText}>Press Enter</span>
            </div>
            
        </Fragment>
    )
}

export default PaginationInput;