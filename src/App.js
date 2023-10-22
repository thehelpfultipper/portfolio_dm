import { Routes, Route } from 'react-router-dom';

import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Projects from './Components/Pages/Projects';
import Categories from './Components/Pages/Categories';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/categories/:type' element={<Categories />} />
    </Routes> 
  );
}

export default App;