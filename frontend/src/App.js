import React from 'react';
import data from './data';
import logo from './logo.svg';
import {BrowserRouter,Route, Link} from 'react-router-dom';
import './App.css';
import ProductScreen from './screen/ProductScreen';
import HomeScreen from './screen/HomeScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onclick="openMenu()">
          &#9776;
          </button>
        <Link to="/">Amazon</Link>
      </div>

      <div className="header-links">
        <a href="cart.html">Cart</a>
        <a href="signin.html">Sign In</a>
      </div>
    </header>

    <aside className="sidebar">
      <h3>Categorias</h3>
      <button className="sidebar-close-button" onclick="closeMenu()">
        x
          </button>
      <ul>
        <li><a href="index.html">Pants</a></li>
        <li><a href="index.html">Shorts</a></li>

      </ul>
    </aside>
    <main className="main">
          <div className="content">

          <Route path="/products/:id" component={ProductScreen}/>
          <Route path="/"  component={HomeScreen} exact={true}/>


          

          </div>

      </main>
      <footer class="footer">
          All right reserved.

      </footer>


  </div>
  </BrowserRouter>
  );
}

export default App;
