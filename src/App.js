import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Work from './Pages/Work';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path='/Work' element={<Work />} />
          <Route exact path='/Blog' element={<Blog />} />
          <Route exact path='/Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
