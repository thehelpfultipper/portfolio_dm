import { Fragment, useState, useContext } from "react";
import { Link } from 'react-router-dom';

import PageTitle from "./PageUI/PageTitle";
import Divider from '../UI/Divider';
import Slider from "./PageUI/Slider";
import DotIndicator from "./PageUI/DotIndicator";
import SliderBtn from './PageUI/SliderBtn';
import DataProvider from '../../context/data-context';

import s from './Projects.module.css';


let CATEGORIES = [
    {
        name: 'All',
        projects: [
            {
                name: 'Project 1',
                description: 'This is a description of Project 1',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.google.com',
            },
            {
                name: 'Project 2',
                description: 'This is a description of Project 2',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.google.com'
            },
            {
                name: 'Project 3',
                description: 'This is a description of Project 3',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.google.com'
            },
            {
                name: 'Project 4',
                description: 'This is a description of Project 4',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.google.com'
            },
            {
                name: 'Project 5',
                description: 'This is a description of Project 4',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.google.com'
            },
            {
                name: 'Project 5',
                description: 'This is a description of Project 4',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.google.com'
            },
            {
                name: 'Project 5',
                description: 'This is a description of Project 4',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.google.com'
            },
            {
                name: 'Project 5',
                description: 'This is a description of Project 4',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.google.com'
            },
            {
                name: 'Project 5',
                description: 'This is a description of Project 4',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.google.com'
            },
            {
                name: 'Project 5',
                description: 'This is a description of Project 4',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.google.com'
            },
            {
                name: 'Project 5',
                description: 'This is a description of Project 4',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.google.com'
            },
            {
                name: 'Project 5',
                description: 'This is a description of Project 4',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.google.com'
            },
            {
                name: 'Project 5',
                description: 'This is a description of Project 4',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.google.com'
            },
            {
                name: 'Project 5',
                description: 'This is a description of Project 4',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.google.com'
            },
            {
                name: 'Project 5',
                description: 'This is a description of Project 4',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.google.com'
            },
            {
                name: 'Project 5',
                description: 'This is a description of Project 4',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.google.com'
            },
            {
                name: 'Project 5',
                description: 'This is a description of Project 4',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.google.com'
            },
            {
                name: 'Project 5',
                description: 'This is a description of Project 4',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.google.com'
            },
            {
                name: 'Project 5',
                description: 'This is a description of Project 4',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.google.com'
            },
            {
                name: 'Project 5',
                description: 'This is a description of Project 4',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.google.com'
            }
        ]
    },
    {
        name: 'Logos',
        projects: [
            {
                name: 'Project 3',
                description: 'This is a description of Project 3',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.google.com'
            },
            {
                name: 'Project 4',
                description: 'This is a description of Project 4',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.google.com'
            }
        ]
    },
    {
        name: 'Websites',
        projects: [
            {
                name: 'Project 5',
                description: 'This is a description of Project 5',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.google.com'
            },
            {
                name: 'Project 6',
                description: 'This is a description of Project 6',
                image: 'https://via.placeholder.com/150',
                link: 'https://www.google.com'
            }
        ]
    }
];

const CustomLink = ({ to }) => {
    let ctx = useContext(DataProvider);
   
    return (
        <Link
            to={to} state={ctx.category}>View All
        </Link>
    );
}

const Projects = () => {
    let [selectedIndex, setSelectedIndex] = useState(1);
    let [cardIndex, setCardIndex] = useState(1);

    return (
        <Fragment>
            <PageTitle title='Projects' />
            {CATEGORIES.map((category, index) => {
                // Category is an object with a name and projects array
                return (
                    <DataProvider.Provider value={{ category }} key={index}>
                        <div className={s.CatTitle_content}>
                            <Divider className={s.CatTitle_divider} />
                            <h3>{category.name}</h3>
                        </div>
                        <div className={s.CatTitle_slider}>
                            {
                                <Slider projects={category.projects} setSelectedIndex={setSelectedIndex} setCardIndex={setCardIndex} />
                            }
                        </div>
                        <div className={s.CatTitle_all}>
                            <span>
                                <CustomLink
                                    to={`/categories/${category.name.toLowerCase()}`} />
                            </span>
                        </div>
                    </DataProvider.Provider>
                );
            })}
        </Fragment>
    );
}


export default Projects;    