import { Routes, Route } from "react-router-dom"
import './App.css';
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import DetailPageUser from "./pages/DetailPageUser";
import DetailPageAdmin from "./pages/DetailPageAdmin";
import './components/footer/footer.css';

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="/aboutpage" element={ <AboutPage/> } />
        <Route path="/detailpageuser" element={ <DetailPageUser/> } />
        <Route path="/detailpageadmin" element={ <DetailPageAdmin/> } />


      </Routes>
    </div>
  );
}

export default App;
