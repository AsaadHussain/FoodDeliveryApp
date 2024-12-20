
import './App.css';
import Home from './screens/Home.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './screens/Login.jsx';
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "./index.css"
import Signup from './screens/Signup.jsx';
import { CartProvider } from './components/ContextReducer.js';
import MyOrder from './screens/MyOrder.jsx';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/createUser' element={<Signup />} />
            <Route exact path='/myOrder' element={<MyOrder />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
