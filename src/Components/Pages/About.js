import { Fragment } from "react";
import PageTitle from "./PageUI/PageTitle";
import Button from "../UI/Button";
import TextBox from "./PageUI/TextBox";

import s from './About.module.css';

const About = () => {
    return (
        <Fragment>
            <PageTitle title='About Me' />
            <div className={s.About_profile__wrapper}>
                <div className={s.About_profile__image}>
                    <div className={s.About_profile__image__wrapper}>
                        <img src='#' alt="Profile image"/>
                    </div>
                </div>
                <div className={s.About_profile__content}>
                    <TextBox className={s.About_profile__text}>
                        <p>Lorem ipsum dolor sit amet ddf rr c rf consectetur. Leo leo nullam bfb fb ffv cursus lectus amet congue non c w ti scw leovr biedmwr tempus de tb go so rjc. cursus lectus amet congue non c w ti scw leovr biedmwr tempus de tb go so rjc</p>
                    </TextBox>
                    <div className={s.About_profile__skills}>
                        <h3>Design Skill</h3>
                        <ul>
                            <li><Button className={s.About_skills}>UI</Button></li>
                            <li><Button className={s.About_skills}>Logo</Button></li>
                            <li><Button className={s.About_skills}>Social Media</Button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}


export default About;