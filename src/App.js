import './App.css';
import MainPage from './Components/MainPage';
import SideBar from './Components/SideBar';
import Footer from './Components/Footer'


function App() {
  return (
    <div className="App">
     <div className="container">
     <SideBar/>
     <MainPage />
     </div>
     <Footer />
    </div>
  );
}

export default App;
