import logo from './logo.svg';
import './App.css';
import { AddUser, Login, ThreadsList } from './components';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AboutPageUser from './pages/AboutPageUser';
import AboutPageAdmin from './pages/AboutPageAdmin';
import HomePageAdmin from './pages/HomePageAdmin';
import LandingPage from './pages/LandingPage';
import AboutPageLanding from './pages/AboutPageLanding';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import MentalHealth from './pages/MentalHealth';
import Politics from './pages/Politics';
import Other from './pages/Other';
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';
import DetailPageUser from './pages/DetailPageUser';
import MentalHealthAdmin from './pages/MentalHealthAdmin';
import PoliticsAdmin from './pages/PoliticsAdmin';
import OtherAdmin from './pages/OtherAdmin';
function App() {
  return (
    <Router>
    <Routes>
     <Route path='/register' exact element={<AddUser/>}/>
     <Route path='/404' exact element={<ErrorPage/>}/>
     <Route path='/login' exact element={<Login/>}/>
     <Route path="/" element={<LandingPage />}/>
     {/* <Route path="/admin" element={<HomePageAdmin />}/> */}
     <Route path="/aboutpageuser" element={<AboutPageUser />}/>
     <Route path="/aboutpageadmin" element={<AboutPageAdmin />}/>
     <Route path="/aboutpagelanding" element={<AboutPageLanding />}/>
     <Route path="/profile" element={<Profile />}/>
     <Route path="/detail/:id" element={<DetailPageUser />}/>
     <Route path='/home'>
            <Route index element={<Home/>}/>
            <Route path='mental' element={<MentalHealth/>}/>
            <Route path='politics' element={<Politics/>}/>
            <Route path='other' element={<Other/>}/>
     </Route>
     <Route path='/admin'>
            <Route index element={<HomePageAdmin/>}/>
            <Route path='mental' element={<MentalHealthAdmin/>}/>
            <Route path='politics' element={<PoliticsAdmin/>}/>
            <Route path='other' element={<OtherAdmin/>}/>
     </Route>
   </Routes>
 </Router>
    
  );
}

export default App;
