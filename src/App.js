import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/cart';
import Home from './pages/home';

function App() {
  return (
    <div>
      <h1>Navbar</h1>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="cart" element={<Cart/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
