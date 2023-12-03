import NavBar from './layouts/NavBar';
import './App.css';
import AllCollections from './pages/AllCollections';
import CreateCollection from './pages/NewCollection';
import Favourites from './pages/Favourites';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import HomePage from './pages/HomePage';
import Footer from './layouts/Footer';


function App() {
  return (
    <div className="App">
    <NavBar/>
    <Routes>
      <Route path='/home' element={<HomePage/>}></Route>
      <Route path='/new-meetup' element={<CreateCollection/>}></Route>
      <Route path='/all-meetups' element={<AllCollections/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/favourites' element={<Favourites/>}></Route>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
