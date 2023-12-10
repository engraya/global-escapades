import NavBar from './layouts/NavBar';
import './App.css';
import AllCollections from './pages/AllCollections';
import CreateCollection from './pages/NewCollection';
import Favourites from './pages/Favourites';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import HomePage from './pages/HomePage';
import Footer from './layouts/Footer';
import CollectionDetail from './components/CollectionDetail';



function App() {
  return (
    <div className="App">
    <NavBar/>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/new-collection' element={<CreateCollection/>}></Route>
      <Route path='/collections' element={<AllCollections/>}></Route>
      <Route path='/collections/:collectionId' element={<CollectionDetail/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/favourites' element={<Favourites/>}></Route>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
