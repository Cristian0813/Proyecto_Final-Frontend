import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './styles/App.css';

/* Componontes */
import NavBarMalla from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer/Footer';
import MapIframe from '../../components/MapIframe/MapIframe';

/* Pages */
import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';
import OurProduct from '../../Pages/Product/Product';
import Contact from '../../Pages/Contact/Contact';

function App() {
  return (
    <> 
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<NavBarMalla />}>
              <Route index element={<Home />} />
              <Route path='SobreNosotros' element={<About />} />
              <Route path='NuestrosProductos' element={<OurProduct />} />
              <Route path='Contactanos' element={<Contact />} />
              <Route path='*' element={<Navigate replace to='/' />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <MapIframe />
      <Footer />
    </>
  );
}

export default App;