import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route />
      <Route />
    </Routes>
  <h1 className="text-3xl font-bold underline">
  Hello world!
</h1>
</BrowserRouter>
</>
)
}

export default App;
