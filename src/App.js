
import Hamburger from './Components/Menu/Hamburger';
import Divider from './Components/UI/Divider';
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
      </nav>
      <Divider />
      <header className="App-header">
      </header>
      <Divider className={s.App_foot__divider} />
    </div>
  );
}

export default App;