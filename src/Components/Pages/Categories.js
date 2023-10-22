import { useState, Fragment } from "react";
import { useLocation, Link } from 'react-router-dom';

import PageTitle from "./PageUI/PageTitle";
import FeaturedPost from "./PageUI/FeaturedPost";
import Pagination from "./PageUI/Pagination";
import SliderBtn from "./PageUI/SliderBtn";

import s from './Categories.module.css';
import leftArrow from '../../Assets/arrow-left-fill.svg';


const Categories = () => {
    let [currentPage, setCurrentPage] = useState(1);
    let { state } = useLocation();

    let itemsPerPage = 6;

    let pages = [];
    const displayPage = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      
      for (
        let i = startIndex;
        i < endIndex && i < state.projects.length;
        i++
      ) {
        state &&
            state.projects.length > 0 &&
                state.projects.forEach((item, index) => {
                index === i && pages.push(<FeaturedPost post={item} key={index} />)
            });
      }

    }
    displayPage();

    return (
        <Fragment>
            <PageTitle title={state.name} />
            <div className={s.Categories_container}>
                <div className={s.arrowNav}>
                    <Link to='/projects'><img src={leftArrow} alt="" /></Link>
                </div>
                <div className={s.grid}>
                    {
                        pages
                    }
                </div>
                <Pagination items={state.projects} page={currentPage} setCurrentPage={setCurrentPage} itemsPerPage={itemsPerPage} />
            </div>
        </Fragment>
    )
}

export default Categories;