import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Homepage/Home/Home'; 
import UpdateInventory from './Pages/UpdateInventory/UpdateInventory';
import Login from './Pages/User/Login/Login';
import Signup from './Pages/User/Signup/Signup';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='/inventory/:inventoryId'element={<UpdateInventory></UpdateInventory>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
      <Toaster position="top-right"
    reverseOrder={false}/>
    </div>
  );
}

export default App;
