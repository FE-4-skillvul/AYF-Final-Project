import "./App.css";
import Profile from "./pages/Profile";
import NavbarComponent from "./components/NavbarComponent";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <div className="wrapper-main">
      <Profile />
      <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
