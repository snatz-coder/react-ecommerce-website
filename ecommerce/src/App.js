import data from './data';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import HomeScrean from './Screans/HomeScrean';
import ProductScrean from './Screans/ProductScrean';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
 
      <div className="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <Link to="index.html">Ecommerce</Link>
      </div>
      <div className="header-links">
        <a href="cart.html">Cart</a>
        <a href="signin.html">SignIn</a>
      </div>
    </header>
    <aside className="sidebar">
      <h3>Shopping Category</h3>
      <button className="" onClick={closeMenu}>x</button>
      <ul>
        <li>
          <a href="index.html">pants</a>
        </li>
        <li>
          <a href="index.html">shirts</a>
        </li>
      </ul>
    </aside>
    <main className="main">
      <div className="content">
        <Route path="/product/:id" component={ ProductScrean }></Route>
        <Route path="/" exact={true} component={ HomeScrean }></Route>
      </div>
    </main>
    <footer className="footer">
      All right resrved.
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
