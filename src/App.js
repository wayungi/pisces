import './App.css';
import FishGrid from './components/partials/FishGrid';
import FishScreen from './components/partials/FishScreen';
import Navbar from './components/partials/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FishDetail from './components/pages/FishDetail';
import HomePage from './components/pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="fish/:species" element={<FishDetail />} />
        </Routes>
      </main>
    </BrowserRouter>

  );
}

export default App;
