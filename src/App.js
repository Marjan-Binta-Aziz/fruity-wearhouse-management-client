import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Homepage/Home/Home'; 
import Delivered from './Pages/Delivered/Delivered';
import Login from './Pages/User/Login/Login';
import Signup from './Pages/User/Signup/Signup';
import { Toaster } from 'react-hot-toast';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import AddItem from './Pages/AddItem/AddItem';
import NotFound from './Pages/Shared/NotFound/NotFound';
import MyItems from './Pages/MyItems/MyItems';
import Inventory from './Pages/Homepage/Inventory/Inventory';
import Blog from './Pages/Blog/Blog'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='/home'element={<Home></Home>}></Route>
        <Route path='/inventory/:inventoryId'element=
        {
          <RequireAuth>
        <Delivered></Delivered>
          </RequireAuth>
        }>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route> 
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/additems' element=
        {
        <RequireAuth>
          <AddItem></AddItem>
        </RequireAuth>
        }></Route>
        <Route path='/manage' element=
        {
        <RequireAuth>
          <ManageInventory></ManageInventory>
        </RequireAuth>
        }>
          </Route>
        <Route path='/myitems' element=
        {
        <RequireAuth>
          <MyItems></MyItems>
        </RequireAuth>
        }>
          </Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <Toaster position="top-right"
    reverseOrder={false}/>
    </div>
  );
}

export default App;
