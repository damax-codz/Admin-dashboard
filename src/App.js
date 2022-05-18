import './App.css';
import Signup from './components/Signup/Signup';
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import Mainpage from './components/MainPage/Mainpage';
import Home from './components/Dashboard/Home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='dashboard' element={<Mainpage />} >
        <Route path='home' element={<Home />} />        
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
