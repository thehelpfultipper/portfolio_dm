
import Hamburger from './Components/Menu/Hamburger';
import Divider from './Components/UI/Divider';
import Button from './Components/UI/Button';

import logo from './Assets/portfolio-logo-min.svg';

import s from './App.module.css';

function App() {
  return (
    <div className={s.App}>
      <nav>
        <Hamburger />
        <div className={s.App_logo__wrapper}>
          <img src={logo} className={s['App-logo']} alt="logo" />
        </div>
        <div>
          <Button type='button' className={`${s.App_btn} ${s.App_header__btn}`}>UI/Graphic Design</Button>
        </div>
      </nav>
      <Divider />
      <header className="App-header">
      </header>
      <div>
        <Button type='button' className={`${s.App_btn} ${s.App_footer__btn}`}>Franko Merkuri</Button>
      </div>
      <Divider className={s.App_foot__divider} />
    </div>
  );
}

export default App;