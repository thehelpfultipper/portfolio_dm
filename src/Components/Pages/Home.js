
import Nav from "../Pages/PageUI/Nav";
import Hamburger from "../Menu/Hamburger";
import Divider from "../UI/Divider";
import Button from "../UI/Button";

import logo from '../../Assets/portfolio-logo-min.svg';

import s from './Home.module.css';

const Home = () => {
    return (
        <div className={s.App}>
            <Nav />
            <Divider />
            <header className={s.App_header}>
                <hgroup>
                    <h1>Hi! I'm a UI designer</h1>
                    <p>Horrvldm sflbdmva ss vd c c ss dfvd rhh grg u ssc gmym ssfsrrv i6zf fgn.</p>
                </hgroup>
                <div className={s.App_header__action}>
                    <Button type='button' className={s.App_content__btn} linkTo='about'>About</Button>
                    <Button type='button' className={s.App_content__btn} linkTo='projects'>Projects</Button>
                </div>
            </header>
            <div>
                <Button type='button' className={`${s.App_footer__btn}`}>Franko Merkuri</Button>
            </div>
            <Divider className={s.App_foot__divider} />
        </div>
    );
}

export default Home;