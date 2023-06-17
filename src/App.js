
import ItemDetailContainer from './Componets/ItemDetailsContainer/ItemDetailContainer';
import ItemListContainer from './Componets/ItemListContainer/ItemListContainer';
import NavBar from './Componets/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './Context/CartContext';
import Cart from './Componets/cart/Cart';
import CheckOut from './Componets/checkout/CheckOut';
import Footer from './Componets/footer/Footer';

function App() {
  return (
    < >
    <BrowserRouter>
    <CartProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:Cat' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='cart/checkout' element={<CheckOut/>}/>
        <Route path='*' element={<h3> Este sitio se encuentra en construcción</h3>}/>
      </Routes>
      <Footer/>
      </CartProvider>
    </BrowserRouter>
   
    </>
  );
}

export default App;
