
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Homepage/Home/Home';
import Inventory from './Pages/Homepage/Inventory/Inventory';
import UpdateInventory from './Pages/UpdateInventory/UpdateInventory';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='/inventory/:id'element={<UpdateInventory></UpdateInventory>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
