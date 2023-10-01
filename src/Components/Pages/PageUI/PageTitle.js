import { useLocation } from 'react-router-dom';

import Divider from '../../UI/Divider';
import Nav from './Nav';

import dribbble from '../../../Assets/contact-dribbble-min.svg';
import linkedin from '../../../Assets/contact-linkedin-min.svg';
import s from './PageTitle.module.css';

const PageTitle = ({ title }) => {
    const location = useLocation();

    return (
        <header className={s.PageTitle}>
            <Nav />
            <div className={s.PageTitle_content}>
                <Divider className={s.PageTitle_divider} />
                <h1>{title}</h1>
                <div style={location.pathname === '/about' ? {display: 'flex'} : {display:'none'}} className={s.PageTitle_socials}>
                    <img src={dribbble} alt='Dribbble logo' />
                    <img src={linkedin} alt='LinkedIn logo' />
                </div>
            </div>
        </header>
    )
}


export default PageTitle;