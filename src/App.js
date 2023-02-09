import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/partials/Navbar';
import FishDetail from './components/pages/FishDetail'; 

import HomePage from './components/pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="App">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="fish/:species" element={<FishDetail />} />
        </Routes>
      </main>
    </BrowserRouter>

  );
}

export default App;
