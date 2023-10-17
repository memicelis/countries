import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import CountryDetails from './components/Details';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/:code" element={<CountryDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
