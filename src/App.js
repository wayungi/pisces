import './App.css';
import FishGrid from './components/partials/FishGrid';
import FishScreen from './components/partials/FishScreen';
import Navbar from './components/partials/Navbar';

function App() {
  return (
    <main className="App">
      <Navbar />
      <FishScreen />
      <FishGrid />
    </main>
  );
}

export default App;
