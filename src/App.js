import './App.css';
import MainPage from './Components/MainPage';
import Footer from './Components/Footer'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Collection from './Components/Collection';


function App() {
  return (
  <Router>
    <div className="App">
    <Routes>
      <Route  path='/' element={<MainPage />}/>
      <Route path='/collection' element={<Collection />}/>
    </Routes>
     <Footer />
    </div>
    </Router>
  );
}

export default App;
