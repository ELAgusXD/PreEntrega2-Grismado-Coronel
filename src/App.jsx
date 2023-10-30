import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {NavBar} from './components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home} from './components/Home/Home'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {CartProvider} from './context/CartContext'
import {CartContainer} from './components/CartContainer/CartContainer'




function App() {
  return( 
    <CartProvider>
    
      <BrowserRouter>
        <NavBar/>
        <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/category/:idCategory" element={<Home/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<CartContainer/>}/>

          </Routes>
        

        </BrowserRouter>

      </CartProvider>

  );
}

export default App;
