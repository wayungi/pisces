import './App.css';
import Navbar from './components/partials/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FishDetail from './components/pages/FishDetail';import FishGrid from './components/partials/FishGrid';

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
