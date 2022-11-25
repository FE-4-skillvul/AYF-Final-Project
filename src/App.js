import { Routes, Route } from "react-router-dom"
import './App.css';
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="/aboutpage" element={ <AboutPage/> } />

      </Routes>
    </div>
  );
}

export default App;
