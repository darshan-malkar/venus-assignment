import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Trip from './pages/trip';
import TripDetail from './pages/tripDetail';
import Placesrou from './pages/placesrou';
import Layout from './pages/Layout';
import NoPage from './pages/noPage';
import AOS from 'aos';
import 'aos/dist/aos.css';
const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return(
   <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/trip" element={<Trip />} />
            <Route path="/trip/:id" element={<TripDetail />} />
            <Route path="/places" element={<Placesrou />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>  

      </BrowserRouter>
   </>
  );
};

export default App;