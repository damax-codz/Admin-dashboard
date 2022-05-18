import './App.css';
import Signup from './components/Signup/Signup';
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import Mainpage from './components/MainPage/Mainpage';
import Home from './components/Dashboard/Home/Home';
import Products from './components/Dashboard/Products/Products';
import Team from './components/Dashboard/Team/Team';
import Client from './components/Dashboard/Clients/Client';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/Admin-dashboard'>
      <Routes>
        <Route  path='/' exact element={<Signup />} />
        <Route path='dashboard' element={<Mainpage />} >
        <Route path='home' element={<Home />} />
        <Route path='product' element={<Products />} />      
        <Route path='client' element={<Client />} />
        <Route path='team' element={<Team />} />        
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
