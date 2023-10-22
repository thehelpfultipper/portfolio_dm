import { Fragment, useState, useRef } from 'react';

import PaginationBtns from './PaginationBtns';
import PaginationInput from './PaginationInput';

import s from './Pagination.module.css';


const Pagination = ({ items, itemsPerPage, setCurrentPage, page }) => {
    // @items is an {}
    let [isInput, setIsInput] = useState(false);
    
    
    let totalItems = items.length,
        totalPages = Math.ceil(totalItems / itemsPerPage);

    // Change page on button click
    const changePageHandler = (e) => {
        if(e.target.value === '...') {
            setIsInput(true);
        } else {
            setIsInput(false);
            setCurrentPage(+e.target.value);
        }
        
    };

    // Button nav for prev and next
    const prevPageHandler = () => {
        setCurrentPage(page - 1);
        if (page < 1) {
          setCurrentPage(totalPages);
        }
      };

      const nxtPageHandler = () => {
          setCurrentPage(page + 1);
          if (page > totalPages) {
              setCurrentPage(1);
            }
      };

    // Generate pagination buttons
    const add = (s, f) => {
        let buttonsToDisplay = [];
     
        for(let i=s; i < f; i++) {
            buttonsToDisplay.push({num: i});
        }

        return buttonsToDisplay;
    }

    // Pagination display logic
    let paginationStep = 2,
        showBtns=null;
  
      if (totalPages < paginationStep) {
        showBtns = add(1, totalPages + 1);
      } else if (page <= paginationStep) {
        showBtns = add(1, paginationStep + 1);
        showBtns = [...showBtns, {num: '...'}, {num: totalPages}];
      } else if (page > totalPages - paginationStep) {
        showBtns = add(
          totalPages + 1 - paginationStep,
          totalPages + 1
        );
        showBtns = [{num: 1}, {num: '...'}, ...showBtns];
      } else {
        showBtns = add(
          page - paginationStep + 1,
          page + paginationStep
        );
        showBtns = [{num: 1}, {num: '...'}, ...showBtns, {num: '...'}, {num: totalPages}];
      }
   
    return (
        <div className={s.pagination}>
            <button className={s.navBtn} onClick={prevPageHandler}>Prev</button> 
            <span className={s.paginationNav}>
                {showBtns.map( (item, i) => {
                    return <PaginationBtns 
                                num={item.num}
                                onClick={changePageHandler}
                                page={page}
                                key={i} />
                })}
            </span>
            {isInput && <PaginationInput page={page} setCurrentPage={setCurrentPage} totalPages={totalPages} setIsInput={setIsInput} />}
            <button className={s.navBtn} onClick={nxtPageHandler}>Next</button>     
        </div>
    )
}

export default Pagination;