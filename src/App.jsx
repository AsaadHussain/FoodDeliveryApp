
import './App.css';
import Home from './screens/Home.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './screens/Login.jsx';
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "./index.css"
import Signup from './screens/Signup.jsx';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/createUser' element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
