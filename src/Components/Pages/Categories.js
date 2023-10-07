import { Fragment } from "react";
import { useLocation, useParams } from 'react-router-dom';

import PageTitle from "./PageUI/PageTitle";
import FeaturedPost from "./PageUI/FeaturedPost";

import s from './Categories.module.css';


const Categories = () => {
    // let params = useParams();
    let { state } = useLocation();

    return (
        <Fragment>
            {/* <PageTitle title={params.type.charAt(0).toUpperCase() + params.type.slice(1)} /> */}
            <PageTitle title={state.name} />
            <div className={s.Categories_container}>
                <div className={s.arrowNav}></div>
                <div className={s.grid}>
                    {
                        state &&
                        state.projects.length > 0 &&
                        state.projects.map((item, index) => {
                           return <FeaturedPost post={item} key={index} />
                        })
                    }
                </div>
                <div className={s.footPagination}></div>
            </div>
        </Fragment>
    )
}

export default Categories;